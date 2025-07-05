const btnAdd = document.querySelector("#btn-add");
const lists = document.querySelector(".lists");


btnAdd.addEventListener("click", () => {
    const inputVal = document.querySelector(".input-box").value.trim();
    if(inputVal != "") {

        const newLi = document.createElement("li");
        newLi.innerText = inputVal;

        const btn = document.createElement("button");
        btn.innerText = "Delete";
        btn.setAttribute("class", "btn-del");

        const hr = document.createElement("hr");

        // lists.appendChild(newLi);
        // lists.appendChild(btn);
        // lists.appendChild(hr);

        //wrapper
        const wrapper = document.createElement("div");
        wrapper.appendChild(newLi);
        wrapper.appendChild(btn);
        wrapper.appendChild(hr);
        lists.appendChild(wrapper);



        document.querySelector(".input-box").value = "";
    }
});

lists.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-del")) {
        const wrapper = e.target.parentElement;
        wrapper.remove();
    }

    if(e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
    }
});

