The task was to develop the interactive banner for the following mobile devices ONLY: <b>iPhone XR(414 x 896), iPhone X(375 x 812), iPhone 5s/SE(320 x 568)</b><br>
The main goal was to make a pixel-perfect layout in accordance with the provided design,<br>
but I tried to balance between pixel-perfect and adaptive one to make the layout a bit more reusable.

<b><i>Please, remember the target devices screen resolutions and use the touch-screen mode for tests!</i></b><br>
You can find the demo here: https://achegevara.github.io/verv-banner-demo/


Some features, that can not be visible directly from the UI:
1) graphs animations are played on each page reload;
2) the slider auto-swipes every 5 seconds until the user makes a swipe manually;
3) subscription blocks are clickable, choosing any of them and clicking the "Continue" button will open an appropriate links(just test ones);
4) the dark mode can be turned ON/OFF by clicking on the "cross" icon at the top-right conner of the banner(this is made just for easy testing)).


The result file index.html is situated in the «/dist» folder. And all the source(pre-build) files are available in the «/src» one.

As usual, type

"npm install"<br>
"npm run build"<br>
("npm start" if with "watch" ON)

in the project directory if you want to rebuild the project using webpack.
