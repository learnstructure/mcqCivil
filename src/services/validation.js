import { getAllQuestionsPool } from '@/data/subjects';

/**
 * Normalizes question text for robust duplicate comparison
 * (strips punctuation, extra spaces, special symbols, casing)
 */
export function normalizeQuestion(text) {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/[^\w\s]|_/g, '') // remove punctuation
    .replace(/\s+/g, ' ')      // collapse spaces
    .trim();
}

/**
 * Check if a text is likely keyboard gibberish or spam
 */
export function isGibberish(text) {
  if (!text) return true;
  const trimmed = text.trim();

  // Must contain at least some alphabetic characters
  if (!/[a-zA-Z]/.test(trimmed)) return true;

  // Check for 5+ identical consecutive characters (e.g. "aaaaa", "11111", ".....")
  if (/(.)\1{4,}/.test(trimmed)) return true;

  // Check for words longer than 25 characters without spaces
  const words = trimmed.split(/\s+/).filter(Boolean);
  for (const word of words) {
    if (word.length > 25) return true;

    // Words with length >= 5 should typically contain at least one vowel (a, e, i, o, u, y)
    // to prevent keyboard mashing like "zxcvbnm" or "dfghjkl"
    if (word.length >= 6 && !/[aeiouyAEIOUY]/.test(word) && !/^\d+$/.test(word)) {
      return true;
    }
  }

  // Common spam keyboard mash patterns
  const spamPatterns = [
    /asdf/i,
    /qwerty/i,
    /zxcv/i,
    /12345/i,
    /test123/i,
    /lorem ipsum/i,
    /blah blah/i,
    /sample question/i
  ];
  if (spamPatterns.some(pat => pat.test(trimmed) && trimmed.length < 30)) {
    return true;
  }

  return false;
}

/**
 * Validates a question submission against spam, gibberish, and duplicates
 * @param {Object} payload - { subjectSlug, question, optionA, optionB, optionC, optionD, ans, contributorName }
 * @param {Array} communityQuestions - List of existing community questions
 * @returns {Object} { isValid: boolean, error?: string }
 */
export function validateQuestionSubmission(payload, communityQuestions = []) {
  const { question, optionA, optionB, optionC, optionD, ans } = payload;

  // 1. Basic Presence & Length Check
  if (!question || typeof question !== 'string' || question.trim().length < 15) {
    return {
      isValid: false,
      error: 'Question statement is too short. Please provide a complete question (at least 15 characters).'
    };
  }

  const questionWords = question.trim().split(/\s+/).filter(Boolean);
  if (questionWords.length < 4) {
    return {
      isValid: false,
      error: 'Please enter a complete question statement (at least 4 words).'
    };
  }

  // 2. Gibberish & Spam Check on Question
  if (isGibberish(question)) {
    return {
      isValid: false,
      error: 'The question text appears to be invalid or contains random keyboard characters. Please enter a meaningful engineering or GK question.'
    };
  }

  // 3. Options Validation
  const options = [
    { key: 'A', text: (optionA || '').trim() },
    { key: 'B', text: (optionB || '').trim() },
    { key: 'C', text: (optionC || '').trim() },
    { key: 'D', text: (optionD || '').trim() },
  ];

  for (const opt of options) {
    if (!opt.text) {
      return {
        isValid: false,
        error: `Option ${opt.key} cannot be empty.`
      };
    }
    if (isGibberish(opt.text)) {
      return {
        isValid: false,
        error: `Option ${opt.key} contains invalid or random characters.`
      };
    }
  }

  // Check that all 4 options are distinct from each other
  const normalizedOptions = options.map(o => o.text.toLowerCase());
  const uniqueOptions = new Set(normalizedOptions);
  if (uniqueOptions.size < 4) {
    return {
      isValid: false,
      error: 'All 4 options (A, B, C, D) must be distinct from one another.'
    };
  }

  // 4. Correct Answer Key Check
  if (!ans || !['A', 'B', 'C', 'D'].includes(ans.toUpperCase())) {
    return {
      isValid: false,
      error: 'Please select a valid correct answer (A, B, C, or D).'
    };
  }

  // 5. Duplicate Question Detection
  const normalizedNewQ = normalizeQuestion(question);

  // 5a. Check against static core database (1,500+ questions)
  const allCorePool = getAllQuestionsPool();
  for (let i = 0; i < allCorePool.length; i++) {
    const existing = allCorePool[i];
    const existingNorm = normalizeQuestion(existing.question);

    if (existingNorm === normalizedNewQ) {
      return {
        isValid: false,
        error: `This question already exists in the official database under "${existing.subjectTitle || 'Subjects'}" (Q#${existing.serialno || i + 1}). Please submit a unique question.`
      };
    }

    // High similarity check on longer questions (first 40 characters matching)
    if (normalizedNewQ.length > 30 && existingNorm.length > 30) {
      if (normalizedNewQ.slice(0, 45) === existingNorm.slice(0, 45)) {
        return {
          isValid: false,
          error: `A very similar question already exists in "${existing.subjectTitle || 'Subjects'}". Please contribute a distinct question.`
        };
      }
    }
  }

  // 5b. Check against already submitted community questions
  for (let i = 0; i < communityQuestions.length; i++) {
    const existingComm = communityQuestions[i];
    const commNorm = normalizeQuestion(existingComm.question);

    if (commNorm === normalizedNewQ) {
      return {
        isValid: false,
        error: `This question has already been contributed to the community by ${existingComm.contributorName || 'another student'}. Please submit a different question!`
      };
    }
  }

  return { isValid: true };
}
