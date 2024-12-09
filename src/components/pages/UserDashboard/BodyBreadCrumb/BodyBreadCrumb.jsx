import React from 'react'

const BodyBreadCrumb = (props) => {
  return (
    <>
			<section className="content-header">
				<div className="container-fluid">
					<div className="row mb-2">
						{/* <div className="col-sm-6">
							<h1 className="m-0">{props.value}</h1>
						</div> */}
						<div className="col-sm-6">
							<ol className="breadcrumb float-sm-left">
								<li className="breadcrumb-item">
									DashBoard
								</li>
								<li className="breadcrumb-item active">{props.value}</li>
							</ol>
						</div>
					</div>
				</div>
			</section>
	    </>
  )
}

export default BodyBreadCrumb
