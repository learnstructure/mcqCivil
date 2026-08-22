import { dataSOM } from './dataSOM';
import { dataStructure } from './dataStructure';
import { dataRCC } from './dataRCC';
import { dataGeotechnical } from './dataGeotechnical';
import { dataSurveying } from './dataSurveying';
import { dataBuildingMat } from './dataBuildingMat';
import { dataEstimating } from './dataEstimating';
import { dataConstructionManagement } from './dataConstructionManagement';
import { dataEconomics } from './dataEconomics';
import { dataDrawing } from './dataDrawing';
import { dataProfessional } from './dataProfessional';

import { dataGkGeography } from './dataGkGeography';
import { dataGkOrganization } from './dataGkOrganization';
import { dataGkNatResources } from './dataGkNatResources';
import { dataGkClimate } from './gk/dataGkClimate';
import { dataGkPlans } from './gk/dataGkPlans';
import { dataGkManagement } from './gk/dataGkManagement';
import { dataGkGovernmentPlans } from './gk/dataGkGovernmentPlans';

/**
 * Generate backwards-compatible question IDs for Firestore comments & URLs
 */
export function formatQuestions(rawQuestions) {
  return rawQuestions.map((item, index) => {
    const serialno = index + 1;
    const cleanQ = (serialno + item.question)
      .replaceAll(/[./?°:%,*_+'";]/g, '')
      .replace(/[¹²³⁴ᵗʰʳᵈˢᵗ]/g, '')
      .replaceAll('  ', '-')
      .replaceAll(' ', '-');
    return {
      ...item,
      serialno,
      id: cleanQ
    };
  });
}

export const TECHNICAL_SUBJECTS = [
  {
    slug: 'som',
    title: 'Strength of Materials',
    shortTitle: 'SOM',
    category: 'technical',
    icon: 'Layers',
    color: 'from-blue-500 to-indigo-600',
    accentColor: 'blue',
    description: 'Forces, stresses, strains, bending moments, shear forces, deflection, and structural mechanics.',
    rawQuestions: dataSOM,
  },
  {
    slug: 'structure',
    title: 'Structural Analysis',
    shortTitle: 'Structure',
    category: 'technical',
    icon: 'Grid',
    color: 'from-indigo-500 to-purple-600',
    accentColor: 'indigo',
    description: 'Trusses, frames, indeterminate structures, influence lines, matrix methods, and dynamics.',
    rawQuestions: dataStructure,
  },
  {
    slug: 'rcc',
    title: 'Reinforced Cement Concrete',
    shortTitle: 'RCC',
    category: 'technical',
    icon: 'Building2',
    color: 'from-amber-500 to-orange-600',
    accentColor: 'amber',
    description: 'Design of beams, slabs, columns, footings, prestressed concrete, and IS 456 standards.',
    rawQuestions: dataRCC,
  },
  {
    slug: 'geotechnical',
    title: 'Geo-technical Engineering',
    shortTitle: 'Geotechnical',
    category: 'technical',
    icon: 'Mountain',
    color: 'from-emerald-500 to-teal-600',
    accentColor: 'emerald',
    description: 'Soil mechanics, bearing capacity, foundations, slope stability, compaction, and permeability.',
    rawQuestions: dataGeotechnical,
  },
  {
    slug: 'surveying',
    title: 'Surveying',
    shortTitle: 'Surveying',
    category: 'technical',
    icon: 'Compass',
    color: 'from-cyan-500 to-blue-600',
    accentColor: 'cyan',
    description: 'Leveling, theodolite, total station, triangulation, curves, photogrammetry, and GIS.',
    rawQuestions: dataSurveying,
  },
  {
    slug: 'buildingMaterials',
    title: 'Building Materials',
    shortTitle: 'Building Mat.',
    category: 'technical',
    icon: 'Boxes',
    color: 'from-rose-500 to-pink-600',
    accentColor: 'rose',
    description: 'Cement, aggregates, concrete technology, bricks, timber, steel, paints, and modern composites.',
    rawQuestions: dataBuildingMat,
  },
  {
    slug: 'estimation',
    title: 'Estimation & Costing',
    shortTitle: 'Estimation',
    category: 'technical',
    icon: 'Calculator',
    color: 'from-violet-500 to-purple-600',
    accentColor: 'violet',
    description: 'Quantity surveying, rate analysis, valuation, specifications, contracts, and BOQ estimation.',
    rawQuestions: dataEstimating,
  },
  {
    slug: 'constructionManagement',
    title: 'Construction Management',
    shortTitle: 'Const. Mgmt',
    category: 'technical',
    icon: 'Briefcase',
    color: 'from-sky-500 to-cyan-600',
    accentColor: 'sky',
    description: 'CPM/PERT, project scheduling, quality control, site safety, equipment, and contract management.',
    rawQuestions: dataConstructionManagement,
  },
  {
    slug: 'economics',
    title: 'Engineering Economics',
    shortTitle: 'Economics',
    category: 'technical',
    icon: 'TrendingUp',
    color: 'from-emerald-500 to-green-600',
    accentColor: 'green',
    description: 'Time value of money, NPV, IRR, cost-benefit ratio, depreciation, inflation, and financial feasibility.',
    rawQuestions: dataEconomics,
  },
  {
    slug: 'drawing',
    title: 'Engineering Drawing',
    shortTitle: 'Drawing',
    category: 'technical',
    icon: 'PencilRuler',
    color: 'from-fuchsia-500 to-pink-600',
    accentColor: 'fuchsia',
    description: 'Orthographic projections, isometric views, structural detailing, CAD concepts, and architectural conventions.',
    rawQuestions: dataDrawing,
  },
  {
    slug: 'professional',
    title: 'Professional Practice',
    shortTitle: 'Ethics & Law',
    category: 'technical',
    icon: 'Scale',
    color: 'from-slate-500 to-gray-700',
    accentColor: 'slate',
    description: 'Nepal Engineering Council code of ethics, procurement law, FIDIC contracts, and engineer responsibilities.',
    rawQuestions: dataProfessional,
  },
];

export const GK_SUBJECTS = [
  {
    slug: 'gk-geography',
    title: 'Geography of Nepal',
    shortTitle: 'Geography',
    category: 'gk',
    icon: 'Globe',
    color: 'from-teal-500 to-emerald-600',
    accentColor: 'teal',
    description: 'Topography, physical divisions, river systems, mountains, passes, and geographical features of Nepal.',
    rawQuestions: dataGkGeography,
  },
  {
    slug: 'gk-organization',
    title: 'UN, SAARC & BIMSTEC',
    shortTitle: 'International Org',
    category: 'gk',
    icon: 'Users2',
    color: 'from-blue-500 to-sky-600',
    accentColor: 'blue',
    description: 'United Nations agencies, SAARC summits, BIMSTEC treaties, international relations, and world bodies.',
    rawQuestions: dataGkOrganization,
  },
  {
    slug: 'gk-natural-resources',
    title: 'Natural Resources of Nepal',
    shortTitle: 'Natural Resources',
    category: 'gk',
    icon: 'Trees',
    color: 'from-green-500 to-emerald-600',
    accentColor: 'green',
    description: 'Hydropower potential, mineral deposits, forests, national parks, wildlife conservation, and water resources.',
    rawQuestions: dataGkNatResources,
  },
  {
    slug: 'gk-climate-nepal',
    title: 'Climate of Nepal & Biodiversity',
    shortTitle: 'Climate & Bio',
    category: 'gk',
    icon: 'CloudSun',
    color: 'from-amber-500 to-yellow-600',
    accentColor: 'amber',
    description: 'Monsoon patterns, altitudinal climate zones, flora & fauna, endangered species, and environmental treaties.',
    rawQuestions: dataGkClimate,
  },
  {
    slug: 'gk-periodic-plans',
    title: 'Periodic Plans of Nepal',
    shortTitle: 'Periodic Plans',
    category: 'gk',
    icon: 'FileText',
    color: 'from-purple-500 to-indigo-600',
    accentColor: 'purple',
    description: '5-year national plans, National Planning Commission targets, GDP growth strategies, and development visions.',
    rawQuestions: dataGkPlans,
  },
  {
    slug: 'gk-management',
    title: 'Fundamentals of Management',
    shortTitle: 'Management',
    category: 'gk',
    icon: 'Kanban',
    color: 'from-rose-500 to-red-600',
    accentColor: 'rose',
    description: 'Planning, organizing, staffing, leading, controlling, decision-making, and organizational behavior principles.',
    rawQuestions: dataGkManagement,
  },
  {
    slug: 'gk-government-plans',
    title: 'Government Plans & Budgeting',
    shortTitle: 'Govt Budgeting',
    category: 'gk',
    icon: 'Landmark',
    color: 'from-indigo-500 to-blue-600',
    accentColor: 'indigo',
    description: 'Fiscal policy, annual budget allocation, public procurement rules, audit systems, and financial governance in Nepal.',
    rawQuestions: dataGkGovernmentPlans,
  },
];

export const ALL_SUBJECTS = [...TECHNICAL_SUBJECTS, ...GK_SUBJECTS];

// Cache formatted questions for performance
const questionsCache = new Map();

export function getSubjectBySlug(slug) {
  const match = ALL_SUBJECTS.find(s => s.slug === slug);
  if (!match) return null;

  if (!questionsCache.has(slug)) {
    questionsCache.set(slug, formatQuestions(match.rawQuestions));
  }

  return {
    ...match,
    questions: questionsCache.get(slug),
  };
}

export function getTotalQuestionsCount() {
  return ALL_SUBJECTS.reduce((acc, sub) => acc + sub.rawQuestions.length, 0);
}

// Global Questions Search Pool
let allQuestionsPool = null;

export function getAllQuestionsPool() {
  if (!allQuestionsPool) {
    const list = [];
    ALL_SUBJECTS.forEach((sub) => {
      const formatted = getSubjectBySlug(sub.slug)?.questions || [];
      formatted.forEach((q) => {
        list.push({
          ...q,
          subjectSlug: sub.slug,
          subjectTitle: sub.title,
          subjectShortTitle: sub.shortTitle,
          subjectCategory: sub.category,
        });
      });
    });
    allQuestionsPool = list;
  }
  return allQuestionsPool;
}

/**
 * Fast search across all questions in the repository
 */
export function searchAllQuestions(query, limit = 50) {
  if (!query || !query.trim()) return [];
  const q = query.toLowerCase().trim();
  const pool = getAllQuestionsPool();
  
  const results = [];
  for (let i = 0; i < pool.length; i++) {
    const item = pool[i];
    const matchQ = item.question?.toLowerCase().includes(q);
    const matchA = item.optionA?.toLowerCase().includes(q);
    const matchB = item.optionB?.toLowerCase().includes(q);
    const matchC = item.optionC?.toLowerCase().includes(q);
    const matchD = item.optionD?.toLowerCase().includes(q);

    if (matchQ || matchA || matchB || matchC || matchD) {
      results.push(item);
      if (results.length >= limit) break;
    }
  }
  return results;
}
