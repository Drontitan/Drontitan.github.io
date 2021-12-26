import React from 'react'
// import "./footer.css"
export const Footer = () => {
    let footerstyle={
        position:"relative",
        top:"20vh",
        width:"100%",
        border:" 2px solid red"

    }
    return (
        <footer className="bg-dark text-light py-3 "style={footerstyle}>
            <p className="text-center">

            Copyright &copy; Mytodoslist.com
            </p>
        </footer>
    )
}
