## NOTE:

All the code here is from my other repository named "Mileestone-3-broken". I was no longer able to deploy my app to the latest version due to a bug which occured after resetting the HEAD (I thought it's ok as I'm the only one working on the repository), and I lost packages which reinstalling was of no use. The easy solution was to create this new repository. So, If you'd like to see the commit stages, please visit the other repository. From here you'll be able to see the latest update of the app.

# Product Page Challenge - Milestone Project 3

This is a website that I created which is my third assignment on the Front-End Web Development course with The Learning People. The tasks of my assignment were the following;

> Your challenge is to build out this e-commerce product page and get it looking as close to the design as possible.

> You can use any tools you like to help you complete the challenge. So, if you've got something you'd like to practice, feel free and give it a go.

> Your users should be able to:

> - View the optimal layout for the site depending on their device's screen size — (This challenge is for 1440px and 375px).
> - See hover states for all interactive elements on the page.
> - Open a lightbox gallery by clicking on the large product image.
> - Switch the large product image by clicking on the small thumbnail images.
> - Add items to the cart.
> - View the cart and remove items from it.

<br>

## Initialising The Project

Having recieved experience in JS from the previous project, I thought to complete this challenge by using a JS framework. I often seen requirements for React.js in job applications. So, I thought React would be ideal to utilise for this project.

Before initialising this project, I watched Youtube tutorials on React and created two other apps which implimented the fundamentals of React. Once I gained enough knowledge and experience, I then began by creating a repository in GitHub to kickstart the development.

There was the option of using a CSS framework such as Bootstrap, but I decided to do this all from my own CSS to get more expreience with responsive design.

All the images required for the challenge were provided in a zip file. It also contained the images of the website design that I am asked to replicate as best as possible.

Here are the design images that I had to replicate:

## Desktop design

<img src="https://user-images.githubusercontent.com/108091839/218257496-e5cb9caf-a07d-475b-a611-774940dbe095.jpg" width="500" height="300">

## Active-states-basket-empty

<img src="https://user-images.githubusercontent.com/108091839/218257673-65aa847d-ab30-4ea1-b0b7-5a2e33e9eec4.jpg" width="500" height="300">

## Active-states-basket-filled

<img src="https://user-images.githubusercontent.com/108091839/218257767-a1b38b81-fc18-4d43-ad76-67e3a1718886.jpg" width="500" height="300">

## Desktop-design-lightbox

<img src="https://user-images.githubusercontent.com/108091839/218257836-f31d7976-d7fa-4e58-a640-7634f9084c76.jpg" width="500" height="300">

## Active-states-lightbox

<img src="https://user-images.githubusercontent.com/108091839/218257863-920df413-bf07-42ed-a9ac-283f160ff4e4.jpg" width="500" height="300">

## Mobile-design

<img src="https://user-images.githubusercontent.com/108091839/218257939-85a02e0e-3ac0-48c5-96ef-284449bc47a9.jpg" width="190" height="450">

## Mobile-design-basket-empty

<img src="https://user-images.githubusercontent.com/108091839/218258018-6cfaa5b8-b4af-48c5-a676-0327fcc2b1e2.jpg" width="190" height="450">

## Mobile-design-basket-filled

<img src="https://user-images.githubusercontent.com/108091839/218258072-753c2735-eefc-485c-a53d-98310ad48607.jpg" width="190" height="450">

## Mobile-menu

<img src="https://user-images.githubusercontent.com/108091839/218258097-4eb90d74-f127-4864-a66e-0636ae7e60b7.jpg" width="190" height="450">

<br/>
<br/>

## Steps I Took to Complete This Assignment

### Header

I started off with the Header component, whist consists of the logo image at the start of the navbar with 5 list items to the right of it (Collections, Men, Women, About, Contact), and a cart icon and an avatar to the far right.

The whole entire header has a grey border-line-bottom which is 2.8rem away from the list items. Each list item has a hover effect of going black from grey and an orange border-line-bottom. The orange border line has been made to appear on the grey border line of the header with the use of padding.

The cart icon has a hover effect to go black due to having a filter brightness property. The Cart component that I created shortly after will then be displayed with a fixed position underneath it as a hover effect of the cart icon also. A hidden span tag that is only revealed when the itemTotal (number of items in the cart) is anything above 0. The code to reveal that itemTotal span is as follows:

```
{itemTotal > 0 && <span className={styles.itemCount}>{itemTotal}</span>}

```

The avatar image was originally square but I made it into a circle with border radius 50% and added an orange border for the hover effect. It also had to be scaled to match the size shown in the image design.

### Product Image

The ProductImage component is half of the main content. Being provided with 4 images of the product, I had to have a large image as the main image and I had to have all the images displayed underneath it as thumbnail images. I was required to make a function that would set the main image to be whatever thumbnail image was selected. I did that with the following code:

```
{shoes.map((image) => (
        <div className={`${styles.thumbnailDiv} ${currentImage === image ? `${styles.selectedDiv}` : ""}`}
        key={shortid.generate()}>
          <img
            src={image}
            alt="Thumbnail"
            className={`${styles.thumbnail} ${currentImage === image ? `${styles.selected}` : ""}`}
            onClick={() => setCurrentImage(image)}/>
        </div>
             ))}
```

All 4 images are in an array called shoes. Using the map method, I iterated over the array and produced each image as a thumbnail image with an onClick function that would set that image as the main image. I also added a code that if the main image matches the thumbnail image then certain CSS styles will be applied to it. Those styles will decrease its opacity revealing the white div behind it and that div will have an orange border applied with the box shadow property. Using the border property affected the surrounding elements' positioning whereas the box shadow property has absolute behaviour and presents itself as a border without affecting other elements.

I was given thumbnail images of the larger images for the challenge but using the above method produced the exact same result without having to add extra images and more code.

### Product Info and Buttons

The ProductInfo component contains the company name with the product information and the price of the product. Underneath that, there's a plus and minus button to add a specified amount of the product which the user can then add to the shopping cart with a button, and that add-to-cart button is placed right next to it.

The add to cart button takes the value of the item counter specified by the user and applies that to the variable itemTotal which then gets calculated for the total price. All the calculations will be displayed in the Cart component as a dropdown box which is revealed when the shopping cart is hovered over by the user. Due to the itemTotal variable having a value above 0, it will reveal the hidden span tag I mentioned earlier — giving the user a clear indication that the items have been added.

This component was imported into the ProductImage component as it is the other half of the main content. I was able to position them exactly as the are in the design image and make them responsive with the following CSS:

```
.wrapper {
 display: flex;
 justify-content: space-around;
}

.productImage {
  margin-left: 8rem;
  margin-right: 2rem;
}

.productInfo {
  margin-top: 2rem;
  padding-right: 2rem;
  margin-right: 2rem;
  width: 400px;
}

```

### Shopping Cart

The Cart component was imported into the header component as it is going to be displayed directly under the shopping cart icon once the user hovers over it. The calculations made for the product total is very simple code due to only having one product item to deal with for the sake of replicating the design images. This component displays "Your cart is empty." when the item total is 0, and it displays the image, title, caluculation and a bin icon when itemTotal is anything above 0. The bin icon resets the itemTotal to 0 when clicked. This is all coded as follows:

```
return (
        <>
            {itemTotal === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className={styles.cartItem}>
                        <img src={productImage} className={styles.shoeImage} alt="Fall Limited Edition Sneakers"/>
                        <p>{text}</p>
                        <p>$125.00 x {itemTotal} <span>${(125.00 * itemTotal).toFixed(2)}</span></p>
                        <img src={bin} className={styles.bin} alt="delete" onClick={reset}/>
                        <button className={styles.checkoutButton}>Checkout</button>
                    </div>
                </>
            )}
        </>
        )
```

As you can see, instead of writing the title of the image, I used a variable called text. I noticed in the design images provided that the mobile view has the title "Autumn Limited Edition..." whereas the desktop view said "Fall Limited Edition." I believed this to be a mistake but nevertheless, I still produced a code that catered for both — using the useeffect hook like so:

```
const [text, setText] = useState('Fall Limited Edition Sneakers');

useEffect(() => {
if (window.innerWidth <= 768) {
setText('Autumn Limited Edition...');
}
}, []);
```

This works when the user initially renders the website on mobile. If you are on desktop and use the dev tools to view the website in mobile view, note; rerendering the site is required to activate the useEffect hook.

### Image Gallery Modal

Most the code for the Modal component was already done in the ProductImage component. I copied the required code and made some adjustments to the CSS to resize it accordingly and to centre it all in the centre of the screen. I also added the Next and Previous icons to be able to cycle through the images. The coding for this is really intriguing:

```
const handlePreviousImage = () => {
const previousIndex = (shoes.indexOf(currentImage) + shoes.length - 1) % shoes.length;
setCurrentImage(shoes[previousIndex]);
};

const handleNextImage = () => {
const nextIndex = (shoes.indexOf(currentImage) + 1) % shoes.length;
setCurrentImage(shoes[nextIndex]);
};
```

This enables the code to have the current index of the images array at 0 and go to the opposite end of the array when the previous icon is clicked — and vice versa.

This Modal component is only revealed when the showModal variable is set to true. This is done with an onClick function placed on the main image in the ProductImage component. Because the Modal component needs to be shown above all the elements on the page, it is almost impossible to do as the component is being rendered as part of another component. So, I was required to use Portal. Portal still enabled me to have my component work in another component but it will also render the component outside the root div located in the index.html file. This is acheived with a div I made underneath the root div with the ID of portal. Then I was able to have the Modal appear over evrything and blacken out the background.

Setting showModal to false in order to hide the component was done by an onClick function applied to the close icon. I also applied the same function to the div which blackens out the background for a better user experience.

### Mobile View

The MobileView component is basically a summerised version of the whole app simply placed in one component. The whole component is inside a div with `className={styles.reveal}`, which gets activated when the screen width size is 768px or less. It hides what is not required for mobile view and adds or keeps what is required. It has tailored CSS for the purpose of mobile experience. It has been imported in the App.js file so that I can pass all the required props. The only component I imported into the MobileView component is the Cart component

One of the newly added features to the MobileView component is the button which reveals the nav elements as a sidebar. This saves the space for the header to neatly contain the logo, cart icon and avatar image.

The code I used to reveal the Nav sidebar is as follows:

```
  {showNav && (
  <>
  <div className={styles.blackOut}></div>

  <div className={styles.navMB}>
      <div onClick={handleCloseNav}><CloseIcon/></div>
      <nav>
        <ul>
          <li><a href="#">Collections</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
  </div>
  </>

  )}
```

### SVGs

All the SVGs I used in this app, I made them into separate components and imported them to where they were needed. As you can see in the snippet of code I used in the MobileView component, I have imported the closeIcon component. This is no less than the SVG code. This kept the code clean and legible. The closeIcon was used to set the showNav variable to false, thus closing the nav sidebar. The function to set the showNav to false is also applied to the overlay div in the background.

<br>

## Interesting Issues Through Developing

### Issue 1

The biggest issue I had when making this app, trying to replicate the design images, was seeing how the selected thumbnail image was made to have a decreased opacity whilst also having an orange border. I used the opacity property on the image with a box shadow property, but the opacity of the box shadow was also being affected. I tried all sorts of code such as filter brightness, transforming the hue, or even testing out colour blend properties — all of which were done in vain. It wasn't until I started doing the modal component that I realised that the opacity is revealing a white background and not revealing the elements behind it. So I had the idea I to add a div to contain the image and make the div the exact same size as the image and give it a white background with an orange box shadow applied to it when it is selected — and BAM! — It worked!

### Issue 2

I used my mobile phone to see the website and dicovered that there were some bugs. One was that the SVGs were tiny. I was very confused. I realised that the scale property I used to enlarge the SVGs isn't supported in some browsers. So, I had to take the scale property off and change the width and hight of the SVG in the code of the SVG itself, and that worked perfectly. Another one was that the nav items had no space between them. I was right to assume that the gap property is also not supported in some browsers. So, I removed the gap property and simply replaced it with margin-bottom.

### Issue 3

As I was building my components, I realised there were some props I needed and I had no way to access them as the component branches were not connected. I tried finding a way to use the props but all the ways were illogical and thus didn't work. I thought that the only way I can do it is to move my useState variables to the App.js file where I can then pass them all through as props to the relevent components.

<br>

## Technologies Used

- [**HTML5**](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
  - The project uses **HTML5** to create the basic elements and content of my website.
- [**CSS3**](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
  - The project uses **CSS3** to add custom styles to the elements and content of my website.
- [**React.js**](https://reactjs.org/)
  - The project uses **React.js** which is an open-source JavaScript framework and library. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.
- [**JSX**](https://reactjs.org/docs/introducing-jsx.html)
  - The project uses **JSX**. JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add JavaScript and HTML in React.
- [**JavaScript**](https://www.javascript.com/)
  - The project uses **JavaScript** which is inevitable as React is dependant on JavaScript.
- [**Google Fonts**](https://fonts.google.com/)
  - A font was used from **Google fonts** to match the design images.
- [**Visual Studio Code**](https://code.visualstudio.com/)
  - I've used **Visual Studio Code** as the development environment to write the code for my website.
- [**Git**](https://git-scm.com/)
  - I've used **Git** as a version control system to regularly add and commit changes made to project in Cloud9, before pushing them to GitHub.
- [**GitHub**](https://github.com/)
  - I've used **GitHub** as a remote repository to push and store the committed changes to my project from Git. I've also used GitHub pages to deploy my website in a live environment.
- [**Chrome DevTools**](https://developer.chrome.com/docs/devtools/)
  - I've used **Chrome DevTools** to view my website from different screen sizes and to play around with the HTML and CSS before deciding what code to implement.

## Deployment

The hosting platform that I've used for my project is GitHub Pages. To deploy my website to GitHub pages, I used the following steps:

1. Opened the main directory in the terminal in VS code.
2. Initialised Git using the `git init` command.
3. Added all files to the Staging area (Git) using the `git add .` command.
4. Committed the files to Git using the `git commit -m "First commit"` command.
5. Created a new repository in GitHub called 'Milestone-3'.
6. Copied the below code from GitHub into the terminal window:

   ```
   git remote add origin https://https://github.com/david-walters/Milestone-3.git

   git push -u -f origin main

   ```

7. Installed the package gh-pages using the `npm install gh-pages --save-dev` command.
8. Added the following code at the top of the package.json file `"homepage": "https://david-walters.github.io/Milestone-3/"`
9. Added the following code in the package.json file inside scripts `"predeploy": "npm run build"`
   and `"deploy": "gh-pages -d build",`
10. Created and deployed the app into the gh-pages branch using the `npm run deploy` command.
11. Went into 'Settings' on my repository page in GitHub.
12. Selected the 'gh-pages' branch option under the 'GitHub Pages' section.
13. Opened the provided link to my website in a new tab.

Here are the links to the final outcome of the website and to my repository.

### Live Website Link

**https://david-walters.github.io/Milestone-3-fixed-/**

### Repository Link

**https://github.com/david-walters/Milestone-3-fixed-.git**
