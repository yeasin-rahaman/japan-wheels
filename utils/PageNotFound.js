'use client'
import Link from 'next/link';
import React from 'react';

const PageNotFound = () => {
    return (
        <div>
                  <div className="container">
          <div className="row" style={{paddingTop:'80px',paddingBottom:'80px'}}>
            <div className="col-xl-6 offset-xl-3 text-center">
              <div className="error_page footer_apps_widget">
                <h3 className="subtitle">The Page Could Not Be Found!</h3>
                <div className="erro_code">
                  <h2>
                    4<span className="text-thm">0</span>4
                  </h2>
                </div>
              </div>
              <Link className="btn_error btn-thm" href="/">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
        </div>
    );
};

export default PageNotFound;