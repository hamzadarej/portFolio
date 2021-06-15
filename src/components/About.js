const About=({data})=>{
const info=data.map((obj)=>{
const {birth,Web,phone,Mail,text}=obj;
    return (
        <div className="about">
<div class="header">
    <h5>ABOUT ME</h5>
    <span></span>
</div>
<div className="aboutBox">
    <section className="left-side">
<li>Birth: {birth}</li>
<li>Web: {Web} </li>
<li>Phone: {phone}</li>
<li>Email: {Mail}</li>
<div className="links"></div>
    </section>
    <section className="right-side">
<div className="pic"></div>
<div className="text"> {text}</div>

    </section>
</div>
        </div>);
    
});
return <div>{info}</div>;
};
export default About;