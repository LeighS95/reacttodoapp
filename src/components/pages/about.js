import React from 'react'

function About() {
    return (
        <React.Fragment>
            <div style={container}>
                <h1 style={h1}>About</h1>
                <p style={para}>This is a simple To-Do List React based app which uses simple components to add and delete items within it. It also uses <a href="https://jsonplaceholder.typicode.com/todos">JSON Placeholder</a> to act as a mock backend.
                </p>
            </div>
        </React.Fragment>
    )
}

const container = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
}

const h1 = {
    margin: '0 auto',
    paddingTop: '20px',
    color: '#333',
    fontSize: '2.25em'
}

const para = {
    margin: '0',
    padding: '50px 50px 10px 50px',
    color: '#333'
}

export default About;