import React from 'react'
import "./Blog.css";
import WidgetDeal from "./WidgetDeal.jsx";
function Blog() {
    return (
        <div>
            <div class="sub-banner">
                <div class="container">
                    <div class="text text-center">
                        <h2 class="text-4xl font-bold">Our BLOG</h2>
                        <p class="text-lg">Lorem Ipsum is simply dummy text</p>
                    </div>
                </div>
            </div>
            <div class="blog-content">
                <div class="container">
                    <div class="blog">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-1">
                                <div class="sidebar">
                                    <div class="widget widget_deal">
                                        <WidgetDeal />
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog