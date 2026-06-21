
const buttons=  Array.from(
    document.getElementsByTagName("button")
)

console.log(Array.isArray(buttons));
const getButtonIDs = buttons.map(button=>button.id);
console.log(getButtonIDs);

const getButtonInnerText=getButtonIDs.map(item=>item.i)
