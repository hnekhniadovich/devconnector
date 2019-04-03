import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';

class CreateProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displaySocialInputs: false,
            handle: '',
            company: '',
            website: '',
            location: '',
            status: '',
            skills: '',
            githubusername: '',
            bio: '',
            twitter: '',
            facebook: '',
            linkedin: '',
            youtube: '',
            instagram: '',
            errors: {}
        }
    }

    render() {
        const { errors } = this.state;

        return (
        <div className="create-profile">
            <div className="container">
                <div className="row">
                    <div className="col-ms-8 m-auto">
                        <h1 className="dispalay-4 text-center">Create Your Profile</h1>
                        <p className="lead text-center">
                            Let's get some inofrmation to make your profile stand out
                        </p>
                        <small className="d-blockpd-3">* = required fields</small>
                        <form onSubmit={this.onSubmit}>
                        <TextFieldGroup
                            placeholder="* Profile Handle"
                            name="handle"
                            value={this.state.handle}
                            onChange={this.onChange}
                            error={errors.handle}
                            info="A unique handle for your profile URL. Your full name, company name, nickname"
                            />
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
        )
    }
}

CreateProfile.protoTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
    
}

const mapStateToProps = (state) => ({
    profile: state.profile,
    errors: state.errors
})

export default connect(mapStateToProps)(CreateProfile);
