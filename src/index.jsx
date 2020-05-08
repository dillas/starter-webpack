import * as $ from 'jquery'
import Post from '@models/Post'
import json from './assets/json'
import xml from './assets/data'
import csv from './assets/cars'
import Stop from '@/assets/stop'
import React from 'react'
import { render } from 'react-dom'
import './babel'
import './styles/styles'
import './styles/scss.scss'

const post = new Post('SeverDV Post Title', Stop)
$('pre').addClass('code').html(post.toString())

const App = () => <div className="container">
    <h1>SeverSV</h1>
    <hr />
    <div className="logo"></div>
    <hr />
    <h2 className="light-font">Post to String</h2>
    <pre></pre>
    <hr />
    <div className="box">
        <h2>scss</h2>
    </div>
    <div className="box">
        <h2>sass</h2>
    </div>
</div>

render(<App />, document.getElementById('root'))

console.log('Post to String:', post.toString())
console.log('JSON:', json)
console.log('XML:', xml)
console.log('CSV:', csv)
