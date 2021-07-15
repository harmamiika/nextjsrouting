import Link from "next/link";

import classes from './button.module.css'

function Button(props) {

    if (!props.link) {
        return <button className={classes.btn} onClick={props.onClick}>{props.children}</button>
    }


    return <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
    </Link>
}

export default Button