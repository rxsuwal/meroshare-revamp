<form className="form w-100" noValidate="noValidate" id="kt_sign_in_form" >
              {/* <!--begin::Heading--> */}
              <div className="text-center mb-10">
                {/* <!--begin::Title--> */}
                <h1 className="text-dark mb-3">Sign In to Metronic</h1>
                {/* <!--end::Title--> */}
                {/* <!--begin::Link--> */}
                <div className="text-gray-400 fw-bold fs-4">New Here?

                  <Link to='/register' className="link-primary fw-bolder">Create an Account</Link>
                </div>
                {/* <!--end::Link--> */}
              </div>
              {/* <!--begin::Heading--> */}

              {/* <!--begin::Input group username--> */}
              <div className="fv-row mb-10">
                {/* <!--begin::Label--> */}
                <label className="form-label fs-6 fw-bolder text-dark">Username</label>
                {/* <!--end::Label--> */}
                {/* <!--begin::Input--> */}
                <input className="form-control form-control-lg form-control-solid" type="text" name="email" autoComplete='on' value={loginCredential?.username} onChange={formDataOnChange} />
                {/* <!--end::Input--> */}
              </div>
              {/* <!--end::Input group username--> */}

              {/* <!--begin::Input group password--> */}
              <div className="fv-row mb-10">
                {/* <!--begin::Wrapper--> */}
                <div className="d-flex flex-stack mb-2">
                  {/* <!--begin::Label--> */}
                  <label className="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
                  {/* <!--end::Label--> */}
                  {/* <!--begin::Link--> */}
                  <a href="../../demo14/dist/authentication/layouts/basic/password-reset.html" className="link-primary fs-6 fw-bolder">Forgot Password ?</a>
                  {/* <!--end::Link--> */}
                </div>
                {/* <!--end::Wrapper--> */}
                {/* <!--begin::Input--> */}
                <input className="form-control form-control-lg form-control-solid" type="password" name="password" autoComplete='on' value={loginCredential?.password} onChange={formDataOnChange} />
                {/* <!--end::Input--> */}
              </div>
              {/* <!--end::Input group password--> */}


              {/* <!--begin::Actions--> */}
              <div className="text-center">
                {/* <!--begin::Submit button--> */}
                <button type="submit" id="kt_sign_in_submit" className="btn btn-lg btn-primary w-100 mb-5" onClick={signIN}>
                  <span className="indicator-label">Continue</span>
                  <span className="indicator-progress">Please wait...
                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                </button>
                {/* <!--end::Submit button--> */}

              </div>
              {/* <!--end::Actions--> */}
            </form>