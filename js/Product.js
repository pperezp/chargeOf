class Product{
    constructor(){
        let util = new Util();

        this.id = util.UUID();
        this.name = {placeholder: "Nombre del producto"};
        this.price = {placeholder: "Precio"};

        this.chargeOf = [
            {value: 1, desc: "AM"},
            {value: 2, desc: "F"},
            {value: 3, desc: "P"},
            {value: 4, desc: "E"}
        ]
    }

    getHtml(){
        let html = "<div id='"+this.id+"' class='product'>";

        html += "<input id='name' type='text' placeholder='"+this.name.placeholder+"'>";
        html += "<input id='price' type='number' placeholder='"+this.price.placeholder+"'>";

        html += this.getChargeSelectHtml();
        html += "</div>";

        return html;
    }

    getChargeSelectHtml(){
        let html = "<select id='charge_of'>";
    
        for(let charge of this.chargeOf){
            html += "<option value='"+charge.value+"'>"+charge.desc+"</option>";
        }

        html += "</select>";
        
        return html;
    }
}