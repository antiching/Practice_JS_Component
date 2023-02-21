document.body.onload = addElement;

function addElement() {

  // create a new div element
  const initDiv = document.createElement("div");
  const parentDiv=document.getElementById("wrapper_dropDown").parentNode
  const wrapperDiv=document.getElementById("wrapper_dropDown");

    initDiv.setAttribute('class', 'dropdown')
    let html = `<div class="item text"><label></label></div>`;
    initDiv.innerHTML = html;

    parentDiv.insertBefore(initDiv,wrapperDiv)



//forEach 用原先的 "wrapper_dropDown , 取出option 的 value 在寫成新的結構

let options=document.querySelectorAll('.dropdown_container option')
//  console.log(options)
options.forEach(function(optionItem){
html += `<div class="item">
    <input className="check" type="checkbox" value="${optionItem.value}"/>
    <span>${optionItem.text}</span>
  </div>`
})

initDiv.innerHTML=html;
  document.querySelector('.dropdown_container').parentNode.appendChild(initDiv);

  clickItem();
}

function clickItem(){

        //  TODO checkbox 設定 click 事件
     let checkbox=document.querySelectorAll('.item input[type="checkbox"]')
        // console.log(checkbox)

        checkbox.forEach(function(clickItem){
            // console.log(clickItem)
            clickItem.addEventListener
            ('click',function(e){
                // console.log('click item')  // 有抓到
            //TODO 抓取有選取的checkbox's value
            // TODO value's

              let clickedItems=''
        let checkedItems = document.querySelectorAll('.item input:checked[type="checkbox"]')
                checkedItems.forEach(function(selectItem){
            // console.log(clickItem); // 有抓到
            // console.log(selectItem.value)
                if(clickedItems !== ''){
         clickedItems += ',';
        clickedItems +=  selectItem.value;
        console.log(clickedItems)}
                
                })
       // TODO label顯示勾選項目
      document.querySelector('.dropdown .text label').innerText = clickedItems    
      //找原本的ListBox value相等的元素，同時做勾選或取消
      // DOM   selected 屬性可設置或返回選項的 selected 屬性的布林值。
      // .checked 來設置或返回是否應被選中
      document.querySelector('.dropdown_container option[value="'+e.target.value+'"]').selected = e.target.checked
               
            })
        })

}





