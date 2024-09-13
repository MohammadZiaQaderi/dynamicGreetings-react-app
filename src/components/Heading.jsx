
function Heading() {
    const customStyle={};
    const currentTime=new Date().getHours();
    let greeting="";
    if(currentTime>=0 && currentTime<12) {
        greeting="Good Moorning";
        customStyle.color="red";
    }
    else if(currentTime>=12 && currentTime<=18) {
      greeting="Good Afternoon";
      customStyle.color="green";
    }
    else {
      greeting="Good Evening";
      customStyle.color="blue";
    }
    return (
    <h1 className="heading" style={customStyle}>Hello, {greeting}</h1>
    );
}
export default Heading;
