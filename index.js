function getFirstSelector(selector) {
  let firstSelector = document.querySelector.(selector)
  return firstSelector;
}

function nestedTarget() {
  return querySelector('.target', '#nested')
}

function increaseRankBy(n) {
  let allRankList = document.querySelectorAll('.ranked-list')
  // looping over all rank list
   for (let i = 0; i < allRankList.length; i++; ) {
    //looping over all children of all rank list
    for (let j = 0; j < allRankList[i].children.length; j++;) {
      allRankList[i].children[j].innerHTML = parestInt(allRankList[i].children[j].innerHTML) + n;
    }
  }
  return allRankList;
}

function deepestChild() {
  let youngChildNode = document.querySelector('#grand-node').querySelectorAll('div')

  return youngChildNode[youngChildNode.length -1]

}
