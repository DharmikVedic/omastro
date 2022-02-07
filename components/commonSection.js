import React from "react";

export default function Section(props){
    const py = props.py || "py-20";
    const px = props.px || "px-5";
    const extra = props.extra;
    const width = props.width || "max-w-7xl"
    const style = `${py} ${px} ${extra} ${width} mx-auto`;
    return(
        <section className={props.section}>
            <div className={style}>
                {props.children}
            </div>
        </section>
    )
}