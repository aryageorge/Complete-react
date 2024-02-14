import './FilterProduct.css'

function FilterProduct(props){
    function onFilterValueChanged(event){
        // console.log(event.target.value);
        props.onFilterValueSelect(event.target.value)
    }
    return(<div className="filter-area">
        <select name="isAvaliable" onChange={onFilterValueChanged}>
            <option value="all">All</option>
            <option value="Avaliable">Avaliable</option>
            <option value="unAvaliable">unAvaliable</option>
        </select>
    </div>);
}
export default FilterProduct;