import React from 'react'
import BlogCategoryList from './BlogCategoryList'
import BlogList from './BlogList'
import BlogSearch from './BlogSearch'
import BlogSubscribe from './BlogSubscribe'
import BlogTopicList from './BlogTopicList'

export default function BlogSection() {
    return (
        <>
            <div className="fl-fix spacer100"></div>
            <section className="body-container">
                <section className="blog-section">
                    <div className="wrapper3">
                        <div className="clear">
                            <BlogList/>
                            <section className="blog-right">
                                <BlogSearch/>
                                <BlogSubscribe/>
                                <BlogCategoryList/>
                                <BlogTopicList/>
                            </section>
                            <div className="clear"></div>
                        </div>
                    </div>
                </section>
            </section>
        </>

    )
}
