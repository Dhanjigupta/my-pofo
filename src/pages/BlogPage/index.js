import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
const BlogPage=()=>{
    return(
    <div>
     <header>
        <Header />
    </header>
 
    <section className="home_skill">
        <div className="container">
            <div className="page_title">
                <h3>My <span>Blog</span></h3>
                <p>List of my latest blogs.</p>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3"> 
                    <div className="input-group mb-3 blog_search">
                        <input type="text" className="form-control" placeholder="Enter here" aria-label="Categories" aria-describedby="blog_search"/>
                        <div className="input-group-append">
                          <button className="btn btn-outline-secondary" type="button" id="blog_search"><i className="fas fa-search"></i></button>
                        </div>
                    </div>
                    <h5 className="blog_category_title">Blog Categories</h5>
                    <ul className="list-unstyled blog_category">
                        <li className="list-item">
                            <a href="#">
                                Web Development
                                <span className="badge badge-pill badge-light">5</span>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="#">
                                Web Development
                                <span className="badge badge-pill badge-light">5</span>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="#">
                                Web Development
                                <span className="badge badge-pill badge-light">5</span>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="#">
                                Web Development
                                <span className="badge badge-pill badge-light">5</span>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="#">
                                Web Development
                                <span className="badge badge-pill badge-light">5</span>
                            </a>
                        </li>
                         
                    </ul>

                    <h5 className="blog_category_title">Blog Categories</h5>
                    <div className="blog_tags">
                        <a href="#" className="badge badge-light">React Js</a> &nbsp;
                        <a href="#" className="badge badge-light">Node Js</a> &nbsp;
                        <a href="#" className="badge badge-light">Mongo Db</a> &nbsp;
                        <a href="#" className="badge badge-light">Design</a> &nbsp;
                    </div>

                 
                    <h5 className="blog_category_title">Latest Projects</h5>
                    <ul className="list-unstyled blog_social_media">
                        <li>
                            <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="#" className="youtube"><i className="fab fa-youtube"></i></a>
                        </li>
                        <li>
                            <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-md-4">
                            <a className="blog-item" href="#">
                                <div className="blog-item-img-container">
                                    <img src="asset/image/project_1.jpg" alt=""/>
                                </div>
                                <div className="blog-content-container">
                                    <p>Android, IOS</p>
                                    <h6>Project Management Panel</h6>
                                </div>
                            </a>
                        </div> 
                        <div className="col-md-4">
                            <a className="blog-item"href="#">
                                <div className="blog-item-img-container">
                                    <img src="asset/image/project_1.jpg" alt=""/>
                                </div>
                                <div className="blog-content-container">
                                    <p>Android, IOS</p>
                                    <h6>Project Management Panel</h6>
                                </div>
                            </a>
                        </div> 
                        <div className="col-md-4">
                            <a className="blog-item" href="#">
                                <div className="blog-item-img-container">
                                    <img src="asset/image/project_1.jpg" alt=""/>
                                </div>
                                <div className="blog-content-container">
                                    <p>Android, IOS</p>
                                    <h6>Project Management Panel</h6>
                                </div>
                            </a>
                        </div> 
                        <div className="col-md-4">
                            <a className="blog-item" href="#">
                                <div className="blog-item-img-container">
                                    <img src="asset/image/project_1.jpg" alt=""/>
                                </div>
                                <div className="blog-content-container">
                                    <p>Android, IOS</p>
                                    <h6>Project Management Panel</h6>
                                </div>
                            </a>
                        </div> 
                        <div className="col-md-4">
                            <a className="blog-item" href="#">
                                <div className="blog-item-img-container">
                                    <img src="asset/image/project_1.jpg" alt=""/>
                                </div>
                                <div className="blog-content-container">
                                    <p>Android, IOS</p>
                                    <h6>Project Management Panel</h6>
                                </div>
                            </a>
                        </div> 
                        <div className="col-md-4">
                            <a className="blog-item" href="#">
                                <div className="blog-item-img-container">
                                    <img src="asset/image/project_1.jpg" alt=""/>
                                </div>
                                <div className="blog-content-container">
                                    <p>Android, IOS</p>
                                    <h6>Project Management Panel</h6>
                                </div>
                            </a>
                        </div> 
                        
                    </div>
                    <div className="pagination_container">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item "><a className="page-link" href="#">Prev</a></li>
                                <li className="page-item "><a className="page-link" href="#">1</a></li>
                                <li className="page-item active"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div> 
        </div>
    </section>
  
    <Footer />

    </div>
    )
}
export default BlogPage;