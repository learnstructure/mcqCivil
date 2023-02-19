const dataEconomics = [
    {
        question: "The ratio obtained by dividing 'quick assests' by current liabilities is called",
        optionA: "Turnover ratio",
        optionB: "Solvency ratio",
        optionC: "Current ratio",
        optionD: "Acid test ratio or quick ratio",
        correct: "d"
    },
    {
        question: "Current assests less inventories divided by current liabilities is known as",
        optionA: "Liquidity ratio",
        optionB: "Current ratio",
        optionC: "Acid-Test ratio",
        optionD: "Debts ratio",
        correct: "c"
    },
    {
        question: "Current assests divided by current liabilities is known as",
        optionA: "Liquidity ratio",
        optionB: "Current ratio",
        optionC: "Acid-Test ratio",
        optionD: "Debts ratio",
        correct: "b"
    },
    {
        question: "The more critical (or severe) test of the firm's liquidity can be judged by",
        optionA: "Liquidity ratio",
        optionB: "Current ratio",
        optionC: "Acid-Test ratio",
        optionD: "Debts ratio",
        correct: "c"
    },
    {
        question: "The estimate based on a detailed quantity survey and furnishes the most accurate and reliable estimate possible is known as",
        optionA: "Conceptual estimate",
        optionB: "Definitive estimate",
        optionC: "Probabilistic estimate",
        optionD: "None of these",
        correct: "b"
    },
    {
        question: "The sunk costs include",
        optionA: "a past expenditure",
        optionB: "an unrecovered balance",
        optionC: "an invested capital that cannot be retreived",
        optionD: "All of these",
        correct: "d"
    },

    {
        question: "The annuity which refers to a debt payment for recovering the initial amount or capital in equal periodical payments is known as",
        optionA: "Present Worth Annuity",
        optionB: "Sinking fund annuity",
        optionC: "Compound annuity",
        optionD: "Capital recovery annuity",
        correct: "d"
    },


    /* {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correct: ""
    }, */



]
const Random = (data) => {
    const num = 5;
    const res = [];
    for (let i = 0; i < num;) {
        const random = Math.floor(Math.random() * data.length);
        if (res.indexOf(data[random]) !== -1) {
            continue;
        };
        res.push(data[random]);
        i++;
    };
    return res;
};
const economicsRandom = Random(dataEconomics)

export { dataEconomics, economicsRandom }