function displayItems() {
    var html1, html2, html3, element1, element2, element3;
    element1 = ".wrap1";
    element2 = ".wrap2";
    element3 = ".wrap3";
    html1 = '<div class="card1"><h6 class="card-header bg-primary text-white">Screen1</h6><div class="card-body"><dl class="row"><dt class="col-6">Started</dt><dd class="col-6">3 Feb. 2013</dd><dt class="col-6">Major Stake Holder</dt><dd class="col-6">HK Fine Foods Inc.</dd></dl></div></div>';
    html2 = '<div class="card2"><h6 class="card-header bg-primary text-white">Screen2</h6><div class="card-body"><dl class="row"><dt class="col-6">Started</dt><dd class="col-6">3 Feb. 2013</dd><dt class="col-6">Major Stake Holder</dt><dd class="col-6">HK Fine Foods Inc.</dd><dt class="col-6">Last Years Turnover</dt><dd class="col-6">$1,250,375</dd><dt class="col-6">Employees</dt><dd class="col-6">40</dd></dl></div></div>';
    html3 = '<div class="card3"><h6 class="card-header bg-primary text-white">Eye diagram</h6><div class="card-body"><dl class="row"><dt class="col-6">Started</dt><dd class="col-6">3 Feb. 2013</dd><dt class="col-6">Major Stake Holder</dt><dd class="col-6">HK Fine Foods Inc.</dd></dl></div></div>';
    document.querySelector(element1).insertAdjacentHTML('beforeend',html1);
    document.querySelector(element2).insertAdjacentHTML('beforeend',html2);
    document.querySelector(element3).insertAdjacentHTML('beforeend',html3);
}

document.querySelector(".send__btn").addEventListener('click', displayItems);