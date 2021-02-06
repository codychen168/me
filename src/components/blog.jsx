import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">Recent Blog</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="https://medium.com/@chen.szuyu.cody/using-ensemble-learning-in-health-care-data-widsdatathon2020-318cb35edd96" className="blog-img"><img src="images/blog-1.jpeg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>April 27, 2020 </small> | <small> Data Modeling </small> | <small> Machine Learning </small> | <small> <i className="icon-bubble3" /> </small></span>
							<h3><a href="https://medium.com/@chen.szuyu.cody/using-ensemble-learning-in-health-care-data-widsdatathon2020-318cb35edd96">Machine Learning in Healthcare</a></h3>
							{/* <h3><a href="blog.html">Renovating National Gallery</a></h3> */}
							<p>In late February 2020, Woman in Data Science (WiDS) launched a Hackathon on Kaggle to predict patients’ survival rate in their first 24 hours of intensive care with dataset provided by MIT’s GOSSIS (Global Open Source Severity of Illness Score initiative. Thinking it would be a good practice of applying data analysis and machine learning, I ...</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						<a href="https://medium.com/@chen.szuyu.cody/so-far-what-ive-learned-about-decision-tree-was-the-basic-model-44696bca7129" className="blog-img"><img src="images/blog-2.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>May 23, 2019 </small> | <small> Ensemble Learning </small> | <small> <i className="icon-bubble3" /> </small></span>
							<h3><a href="https://medium.com/@chen.szuyu.cody/so-far-what-ive-learned-about-decision-tree-was-the-basic-model-44696bca7129">Ensembles of Decision Trees</a></h3>
							{/* <h3><a href="blog.html">Ensembles of Decision Trees</a></h3> */}							
							<p>So far what I’ve learned about decision tree was the basic model. That is, I’ll only have one tree model after all the training and pruning process. Nevertheless, decision trees can actually be assembled together and provide better predicting behavior, which is called “ Ensembles of Decision Trees”...</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="https://medium.com/@chen.szuyu.cody/journal-to-data-scientist-ee62f99f9753" className="blog-img"><img src="images/blog-3.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>May 15, 2019 </small> | <small> Journal </small> | <small> <i className="icon-bubble3" /> </small></span>
							<h3><a href="https://medium.com/@chen.szuyu.cody/journal-to-data-scientist-ee62f99f9753">Journal To Data Scientist</a></h3>
							{/* <h3><a href="blog.html">Journal To Data Scientist</a></h3> */}
							<p>Technically, this is my first article to talk about my thought about data scientist. I started writing the blog because I want to build my portfolio as well as to record my journey...</p>
						</div>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 animate-box">
					{/* <p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p> */}
					</div>
				</div>
			</div>
			</section>
      </div>
    )
  }
}
