# 02- Semantic HTML





### [MDN Semantic elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantic_elements)



Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. 



A semantic element clearly describes its meaning to both the browser and the developer.



For example, a <p> tag meaning is that the enclosed text is a paragraph.



###### Semantic elements = elements with a meaning.



###### A semantic element clearly describes its meaning to both the browser and the developer.



##### Examples of non-semantic elements:   ` <div>` and `<span>` - Tells nothing about its content.

##### Examples of semantic elements: `<form>`, `<table>`, and `<article>` - Clearly defines its content.







### Example of tag `<b></b>` and `<strong></strong>`



Tag `<b>` only makes the text bold, while `<strong>` gives it the meaning that it is important. For example think of a screen reader or a person with impaired vision that is listening to the content. That is how the screen reader know what to emphasize as an important content, for example `<em>` tag instead of `<i>`



### [Semantic HTML Example - gist](https://gist.github.com/ross-u/01a0d06dcee8d980c21015192f741b7f)



```html
<!DOCTYPE html>
<html>

  <head>
    <title>Semantic HTML</title>
    <meta charset='UTF-8'>
  </head>

  <body>
    <nav>
      <a href="">Home</a>
      <a href=""> Gallery</a>
      <a href="">Contact</a>
    </nav>

    <header>
      <h1>
        Sarah O'Connor Fanpage
      </h1>      
    </header>
      
    <main>
        
      <section>
        <h2>Welcome</h2>
        <p>Welcome to the unofficial <strong> Sarah O'Connor </strong> (Terminator) fanpage.</p>

        <figure>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sarah_Connor_%28Linda_Hamilton%29.jpg/220px-Sarah_Connor_%28Linda_Hamilton%29.jpg" 
               alt="Sarah O'Connor movie screenshot">
          <figcaption>
            Source: <a href="">Wikipedia</a>
          </figcaption>
        </figure>
        
        <article>
          <h1>About</h1>
          <p>Sarah Connor is a fictional character in the <mark>Terminator</mark> franchise. </p>
          <time timedate="01-10-2019">October 10, 2019</time>

          <details>
            <summary>Details</summary>
            Very little is known about Sarah's life prior to May 12, 1984.
            According to the movie script, her birth date would be between May 15, 1964, and May 11, 1965.
          </details>
            
        </article>
          
      </section>
    </main>

    <iframe width="600" 
            height="400" 
            src="https://www.youtube.com/embed/heJBfReQF9Q"
            controls
    >
      Error message
    </iframe>

    <footer>
      <small> Copyright ----- 2019 </small>
    </footer>
  
  </body>
</html>
```





### Most commonly used -  New Semantic Elements in HTML5

```html
<!-- COMMON HTML5 SEMANTIC ELEMENTS -->

<section>  <!-- defines a section in a document (content). A thematic grouping of content, typically with a heading. -->
    
<nav> 	   <!-- nav is used as a major block of navigation links, like navigation bar -->
<header>   <!-- header for a document or section. Should be used as a container for introductory content. -->
<main>     <!-- Specifies the main content of a document -->
<footer>  <!-- a footer for a document or section -->
<aside>  <!-- aside content that is related to the main content (like a sidebar) -->
<mark>  <!-- Defines marked/highlighted text -->
<time>  <!-- defines a human-readable date/time. Can have a machine-readable attribute datetime  -->
    
    
<!-- Save the most special for the end -->
<!-- There is often a dilemma of which one to use, <section> or <article>  :) -->

<article>  <!-- independent, self-contained content (forum post, blog post, article). -->
    
<!-- All these elements are not self closing  :) -->
```





| Tag                                                          | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [<section>](https://www.w3schools.com/tags/tag_section.asp)  | Defines a section in a document                              |
| [<article>](https://www.w3schools.com/tags/tag_article.asp)  | Defines an article                                           |
| [<nav>](https://www.w3schools.com/tags/tag_nav.asp)          | Defines navigation links                                     |
| [<header>](https://www.w3schools.com/tags/tag_header.asp)    | Specifies a header for a document or section                 |
| [<main>](https://www.w3schools.com/tags/tag_main.asp)        | Specifies the main content of a document                     |
| [<footer>](https://www.w3schools.com/tags/tag_footer.asp)    | Defines a footer for a document or section                   |
| [<aside>](https://www.w3schools.com/tags/tag_aside.asp)      | Defines content aside from the page content                  |
| [<mark>](https://www.w3schools.com/tags/tag_mark.asp)        | Defines marked/highlighted text                              |
| [<time>](https://www.w3schools.com/tags/tag_time.asp)        | Defines a date/time                                          |
| [<details>](https://www.w3schools.com/tags/tag_details.asp)  | Creates a disclosure widget that can be toggled open or closed. |
| [<figcaption>](https://www.w3schools.com/tags/tag_figcaption.asp) | Defines a caption for a <figure> element                     |
| [<figure>](https://www.w3schools.com/tags/tag_figure.asp)    | Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc. |
| [<summary>](https://www.w3schools.com/tags/tag_summary.asp)  | Defines a visible heading for a <details> element            |
| [<small>](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element) | Small print (also referred to as "fine print") usually refers to the part of a document that contains disclaimers, caveats, or legal restrictions, such as copyright |





#### Remember to use the `<section>` as a parent for the `<article>`

```html
<section>
	<article></article>
</section>
```





## HTML Accessibility



Accessibility starts with using semantic elements.



### Accessibility Attributes for html tags/elements



## Alternative Text - alt

**The `alt` attribute provides an alternate text for an image,** if the user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).

```html
<img src="img_chania.jpg" alt="Flowers in Chania">
```



## Declare the Language - `lang`

Declaring a language is important for screen readers and search engines. Use `lang` attribute.

```html
<html lang="en">
```



## Link Titles

The `title` attribute specifies extra information about an element. 

```html
<a href="https://www.google.com/" title="Click link to visit Google.com">Google</a>
```




