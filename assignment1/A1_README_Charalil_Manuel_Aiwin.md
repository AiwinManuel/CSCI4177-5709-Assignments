
# Assignment 1


* *Date Created*: 5 Feb 2024
* *Last Modification Date*: 7 Feb 2024
* *A1 Lab URL*: https://git.cs.dal.ca/acmanuel/csci4177-5709-assignments/-/tree/main/assignment1?ref_type=heads
* *A1 Git URL*: https://github.com/AiwinManuel/CSCI4177-5709-Assignments/tree/main/assignment1
* *A1 Production domain*: https://main--preeminent-pixie-c3c5c8.netlify.app/


## Authors

* [Aiwin Charalil Manuel](aw380590@dal.ca) - *(Owner)*

## Built With

* [React.Js](https://react.dev/learn) - The  library used

### src/Book/BookDetails.js

*Lines 11 - 18 *

```
title: 'Noble Beginnings: A Thriller (Jack Noble Thrillers Book 1)',
    author: ' L.T. Ryan (Author) ',
    description: 'In March of 2002, while the eyes of the world focused on Afghanistan, Jack Noble finds himself on the outskirts of Baghdad, Iraq. A Marine in name only, Jack is on-loan to the CIA. Normally an integral part of the team, he finds that he is nothing more than a security detail in Iraq. ',
    imageUrl: img, 
    reviews: [
        "I quite enjoyed the book. I was pleased to have the book actually have a sensible ending. It thereby offers the potential for future adventures. It has been my experience too many writers leave the ending unfinished, for obvious reasons.",
        "At this point too many times they dash in where cooler minds might fear to tread. The outcome in these situations is often disastrous with our hero getting bashed on the head, overpowered and tied up for torture. or otherwise finding himself in deep trouble. It would seem to me that these finely tuned merchants of mayhem would give some pause, and forethought, to thinklng this trough a bit more."
    ], 

```

The code above was created by adapting the code in [Nobel-Beginings-jack-Thriller](https://www.amazon.ca/Noble-Beginnings-Jack-Thriller-ebook/dp/B009K8RHNQ?ref_=ast_sto_dp#customerReviews) as shown below: 

```
In March of 2002, while the eyes of the world focused on Afghanistan, Jack Noble finds himself on the outskirts of Baghdad, Iraq. A Marine in name only, Jack is on-loan to the CIA. Normally an integral part of the team, he finds that he is nothing more than a security detail in Iraq.

Jack and his partner Bear have a run-in with four CIA special agents over the treatment of an Iraqi family. Within hours Jack and Bear are detained.

All Jack wanted was to finish his enlistment and move on with his life. All he did was intervene and save a family from unwarranted violence at the hands of four CIA agents. But he soon discovers that he did far more than intervene. He has placed himself dead square in the middle of a conspiracy that reaches the highest levels of the U.S. government.

This fast-paced political crime thriller with over 14000-5 star reviews by Wall Street Journal & USA Today bestselling author L.T. Ryan will have you burning through the pages late into the night as Jack Noble races to stop the conspiracy before it claims his life.

If you like Nelson DeMille, WEB Griffin, Tom Clancy's Jack Ryan, Lee Child's Jack Reacher, Vince Flynn's Mitch Rapp, and Robert Ludlum's Jason Bourne, you will be engrossed in this unputdownable Jack Noble thriller.
Other Books in the Jack Noble Series of Espionage and Crime Thrillers

Noble beginnings is the first of fifteen Jack Noble mystery and conspiracy thriller books. In addition, a recently released prequel, and three series spin-offs are available. The series has earned thousands of five-star reviews, and has been downloaded over two-million times to Kindles around the world.

If you enjoy gripping thrillers loaded with suspense, action, twists & turns, Jack Noble is for you!

Readers say...

"JACK NOBLE IS MY JASON BOURNE!"

"This is an awesome story - so captivating that you'll read it late into the night. Highly recommend.."

"I have really enjoyed reading the Jack Noble series, and this one is no exception, he may have replaced Jack Reacher as a new favorite!"

Wall Street Journal and USA Today Bestseller L.T. Ryan: 3/27/2014, 3/5/2015, 7/7/2016, 12/15/2016, 5/25/2017, 06/09/2021

```

- <!---How---> The description in [amazon.ca](https://www.amazon.ca/Noble-Beginnings-Jack-Thriller-ebook/dp/B009K8RHNQ?ref_=ast_sto_dp#customerReviews) was as dummy data for book reference.

### src/assets/images


```
blackheart.png (https://www.iconpacks.net/free-icon/black-heart-outline-3512.html)
book.png (https://media.istockphoto.com/id/530204597/vector/book-cartoon-set-c.jpg?s=612x612&w=0&k=20&c=oVxq74vy2hE7wvS7iZfjW6ChKU7ZfSEKXPYaLPLQveQ=)
red heart.png (https://en.wikipedia.org/wiki/Heart_symbol#/media/File:Heart_coraz%C3%B3n.svg)

```

### Navbar/Navbar.js

*Lines 01 - 37*

```
import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import './NavbarCSS.css'

class Navbar extends Component{

   render(){
    return(
        <nav className="navbar navbar-expand-lg " style={{backgroundColor:'black'}}>
        <div className="container-fluid ">
        
          <div className="collapse navbar-collapse justify-content-end me-4" id="navbarNav">
          <Link to="/" className="navbar-brand ps-5" style={{ fontSize: "200%", color: "white", textDecoration: "none",marginLeft: '90px' }}>
            Home
          </Link>
            <ul className="navbar-nav" style = {{marginRight: "150px", fontSize: "100%"}} >
              <li className="">
                <Link to="/about" style={{color: "white" }} className="nav-link font-120 white pointer px-4" aria-current="page">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" style={{color: "white" }} className="nav-link font-120 white pointer px-4" >Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" style={{color: "white" }} className="nav-link font-120 white pointer px-4" >FAQ</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" style={{color: "white" }} className="nav-link font-120 white pointer px-4" >Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
   }
   
}

```

The code above was created by adapting the code in [getbootstrap.com](https://getbootstrap.com/docs/4.0/components/navbar/) as shown below: 

```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

```


- <!---How---> [getbootstrap.com](https://getbootstrap.com/docs/4.0/components/navbar/)'s Code was modified by adding neccesary features required for the page