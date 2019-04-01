# 02- Semantic HTML and A11y (accessibility)





Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. 



For example, a <p> tag meaning is that the enclosed text is a paragraph.



###### Semantics is the study of the meanings of words and phrases in a language.

###### Semantic elements = elements with a meaning.



###### A semantic element clearly describes its meaning to both the browser and the developer.



##### Examples of non-semantic elements:   ` <div>` and `<span>` - Tells nothing about its content.

##### Examples of semantic elements: `<form>`, `<table>`, and `<article>` - Clearly defines its content.







### Example of tag `<b></b>` and `<strong></strong>`



Tag `<b>` only makes the text bold, while `<strong>` gives it the meaning that it is important. For example think of a screen reader or a person with impaired vision that is listening to the content. That is how the screen reader know what to emphasize as an important content, for example `<em>` tag instead of `<i>`





### Most commonly used -  New Semantic Elements in HTML5

```html
<!-- COMMON HTML5 SEMANTIC ELEMENTS -->

<section>  <!-- defines a section in a document (content). A thematic grouping of content, typically with a heading. -->
<article>  <!-- independent, self-contained content (forum post, blog post, article). -->
<nav> 	   <!-- nav is used as a major block of navigation links, like navigation bar -->
<header>   <!-- header for a document or section. Should be used as a container for introductory content. -->
<main>     <!-- Specifies the main content of a document -->
<footer>  <!-- a footer for a document or section -->
<aside>  <!-- aside content that is related to the main content (like a sidebar) -->
<mark>  <!-- Defines marked/highlighted text -->
<time>  <!-- defines a human-readable date/time. Can have a machine-readable attribute datetime  -->
    
<!-- These elements are not self closing  :) -->
```



W3Schools links with examples and description

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
| [<details>](https://www.w3schools.com/tags/tag_details.asp)  | Defines additional details that the user can view or hide    |
| [<figcaption>](https://www.w3schools.com/tags/tag_figcaption.asp) | Defines a caption for a <figure> element                     |
| [<figure>](https://www.w3schools.com/tags/tag_figure.asp)    | Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc. |
| [<summary>](https://www.w3schools.com/tags/tag_summary.asp)  | Defines a visible heading for a <details> element            |





#### Confusion  - Nesting article in section and vice versa

chicken and egg situation - no exact rule

Section and article can contain each other, usually confusion which to put first.

You will also find pages with `<section>` elements containing `<section>` elements, and `<article>` elements containing `<article>` elements.



#### To make it simple to remember use `<section>` as a parent for the `<article>`s

```html
<section>
	<article></article>
</section>
```





## HTML Accessibility A11y



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





## Write Good Links

A link should explain clearly what information the reader will get by clicking on that link.



```html
<p>BAD</p>
<ul>
  <li><a href="#!">Click here</a></li>
  <li><a href="#!">Read ...</a></li>
  <li>Mars tickets ...<a href="#!">here</a></li>
</ul>

<p>GOOD</p>
<ul>
  <li><a href="#!">Find out more about JavaScript.</a></li>
  <li>Read more about <a href="#!">Read more about the new framework</a></li>
  <li><a href="#!">Buy tickets to Mars here</a></li>
</ul>
```





## Use Clear Language

Use clear language that is easy to understand, and try to avoid characters that cannot be read clearly by a screen reader. For example:

- Keep sentences as short as possible.
- Avoid dashes. Instead of writing 1-3, write 1 to 3
- Avoid abbreviations. Instead of writing Feb, write February
- Avoid slang words

------





## Web Accessibility Checklist



#### When building an application and focusing making a page acessible, use the A11y project checklist



[A11y project checklist](https://a11yproject.com/checklist.html)





## Accessibility features in Chrome DevTools



[Accessibility features in Chrome DevTools](<https://developers.google.com/web/tools/chrome-devtools/accessibility/reference>)



**Live Demo**

1. Open the page - (PLEASE DONT BE SHOCKED, THIS IS FOR DEMO PURPOSES   :)  )  <http://www.jamilin.com/>

   

2. Open the **Console** - Ctrl + J

3. Go to the **Audits** panel 

4. Run the audit with checking the **Accessibility** and **Best Practices**



5. Check the page with great acccessibility score - <https://www.visionaustralia.org/>