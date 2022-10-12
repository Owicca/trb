console.log("on triburile");

let labels = ["wood", "stone", "iron"];

let resources = {
  iron: document.querySelector("#iron").innerHTML,
  wood: document.querySelector("#wood").innerHTML,
  stone: document.querySelector("#stone").innerHTML
};


let isMain = window.location.search.indexOf("screen=main");
if(isMain) {
  let buildings = document.querySelectorAll('tr[id^="main_buildrow_"]');

  for(building of buildings) {
    let skipBuilding = building.childElementCount <= 2;
    if(skipBuilding) {
      // building is max level, so skip it
      //console.log("skipped", building);
      continue;
    }
    //console.log(building);
    let resourceTD = {
      wood: building.querySelector(".cost_wood"),
      stone: building.querySelector(".cost_stone"),
      iron: building.querySelector(".cost_iron")
    }
    let cost = {
      wood: resourceTD.wood.getAttribute("data-cost"),
      stone: resourceTD.stone.getAttribute("data-cost"),
      iron: resourceTD.iron.getAttribute("data-cost")
    }

    let required = {
      wood: resources.wood - cost.wood < 0 ? resources.wood - cost.wood : 0,
      stone: resources.stone - cost.stone < 0 ? resources.stone - cost.stone : 0,
      iron: resources.iron - cost.iron < 0 ? resources.iron - cost.iron : 0
    }

    if(required.wood == 0 && required.stone == 0 && required.iron == 0) {
      // building can be built, so skip it
      continue;
    }

    for(lbl of labels) {
      resourceTD[lbl].append(document.createElement("br"), createRequired(required[lbl]));
    }

    console.log(building.getAttribute("id"), resources, cost, required);
  }
}

function createRequired(val) {
  let span = document.createElement("span");
  span.appendChild(document.createElement("br"));
  span.style.marginLeft = "18px";
  span.innerHTML = val;

  return span;
}

function createButton(val) {
  let btn = document.createElement("button");
  bnt.classList += "btn_required";
  btn.innerHTML = val;

  return btn;
}

function addRequired(building) {
}

/*browser.runtime.sendMessage({
  "isLogged": true
})
  .then(checkIsLogged, err)
  .catch(err => console.log("err: ", err));

function checkIsLogged(message) {
  console.log("isLogged", message);
}

function err(err) { console.log("err false", err); }*/
