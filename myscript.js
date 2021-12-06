    var swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
      });
		
	function imgSlider(anything){
		document.querySelector('.starbucks').src = anything;
	}


 function HeinekenText() {
            document.getElementById('lager').innerHTML
                = 'The story of Heineken really began on February 15, 1864, when Gerard Adriaan Heineken took over the Haystack brewery in Amsterdam. Just 22 years old, Gerard had little brewing experience, but he had plenty of courage, self-confidence and entrepreneurial spirit.<br><br> He knew that to succeed he would need to take a big risk. He decided to brew only lager, even though the Dutch were much better at brewing ale, porter and brown. That decision, as we now know, paid off – the second Heineken® brewery opened less than a decade later in Rotterdam.<br><br>Gerard also knew how to go about his business. With an eye on the big picture, he treated his staff and clients well and made sure his product was always of the best quality.<br><br>Today, Heineken writes on their website: "We have always placed inspired innovation and continual improvement at the heart of our brewing processes. By applying those same ideals to every other element of our business, we’ve crafted a unique success story that spans more than 150 years and now encompasses the heritage of over 300 brands."';
        }
function HeinekenTitle(){
	document.getElementById('title').innerHTML
	= 'Heineken';
}

function Heineken(){
    HeinekenText();
	HeinekenTitle();
	imgSlider('lager1.png');
}

 function CarlsbergText() {
            document.getElementById('lager').innerHTML
                = 'It all begins with a man named Jacob Christian Jacobsen. After his father’s death in 1835, he comes a brewer. His love and passion for beer instilled him to learn and acquire different techniques in the brewing processes. In the year of 1847, Carlsberg brewery was born. It was named after his firstborn and was established just outside Copenhagen, Denmark. The first-ever brewed batch was recorded on the 10th of November, 1847, and by 1868 they exported a barrel to Scotland.<br><br>J.C. Jacobsen did a lot for the beer industry. The one he’s well known for was opening the first brewery owned and run research facility called Carlsberg laboratory in 1875. Its purpose was to study and improve the malting, brewing and fermenting process. By 1883, a professor named Emil Hansen revolutionized brewing forever.<br><br>He uncovered that organisms comprise of different fungi and that yeast culture can be cultivated. This, in turn, would make beer production entirely consistent. J.C. Jacobsen knowingly gave the secret to the world even though it would have been worth a fortune.  Some 26 years later, a Danish chemist by the name of Dr. Soren Sorensen, head of Carlsberg Laboratory Chemical Department at that time, had developed pH scaled, which have become the standard by which we determine how a liquid will react and interact with living organisms. The laboratory, to this day, still contributed to essential studies of enzymes.';
        }
function CarlsbergTitle(){
	document.getElementById('title').innerHTML
	= 'Carlsberg';
}

function Carlsberg(){
    CarlsbergText();
	CarlsbergTitle();
	imgSlider('lager2.png');
}

 function SanMiguelText() {
            document.getElementById('lager').innerHTML
                = 'Established in 1890, La Fabrica de Cerveza de San Miguel, Southeast Asia’s first brewery produced and bottled what would eventually become one of the bestselling beers in the region. Within the span of a generation, San Miguel Beer would become an icon among beer drinkers.<br><br>Today, San Miguel Beer–the Company’s flagship product–is one of the largest selling beers and among the top 10 beer brands in the world. While brewing beer is the company’s heritage, San Miguel subsequently branched out into the food and packaging businesses.<br><br>From the original cerveza that first rolled off the bottling line, San Miguel Corporation has since expanded its portfolio to produce a wide range of popular beverage, food and packaging products which have–for over a century–catered to generations of consumers’ ever changing tastes. It has also diversified into heavy industries including power and other utilities, mining, energy, tollways and airports.<br><br>The Company’s manufacturing operations extend beyond the Philippines to Hong Kong, China, Indonesia, Vietnam, Thailand and Malaysia. Its products are exported to major markets around the world. Continuing a tradition of product quality, San Miguel is capitalizing on its unique strengths in brands and distribution to weave its products more deeply into the fabric of everyday life. Not just in the Philippines but in the Asia-Pacific region.';
        }
function SanMiguelTitle(){
	document.getElementById('title').innerHTML
	= 'San Miguel';
}

function SanMiguel(){
    SanMiguelText();
	SanMiguelTitle();
	imgSlider('lager3.png');
}