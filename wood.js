function woodQuantity(chair, table, bed) {
    const perChair = 3;
    const perTable = 10;
    const perbed = 50;

    const chairTotalWood = chair * perChair;
    const tableTotalWood = table * perTable; 
    const bedTotalWood = bed * perbed;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;
}

const allTotalwood = woodQuantity(4 , 2, 1 );

console.log(allTotalwood);