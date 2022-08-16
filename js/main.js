let elWrapper = document.querySelector(".wrapper");
let elTemplate = document.querySelector("#table__row").content;

function renderUniversities(array) {
    elWrapper.innerHTML = null
    let newFragment = document.createDocumentFragment()
    
    for (const item of array) {
        let newRow = elTemplate.cloneNode(true)
        
        newRow.querySelector(".uni__name").textContent = item.name;
        newRow.querySelector(".uni__url").textContent = item.web_pages[0];
        newRow.querySelector(".uni__url").href = item.web_pages[0];
        newRow.querySelector(".uni__url").setAttribute("target", "blank")
        
        newFragment.appendChild(newRow)
    }
    elWrapper.appendChild(newFragment)
}


fetch("http://universities.hipolabs.com/search?country=United+States")
.then(res => res.json())
.then(data => renderUniversities(data))