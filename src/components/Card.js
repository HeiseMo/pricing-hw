import React, { Component } from "react";
import { ReactComponent as Tick } from "../tick.svg";
import Modal from "./Modal"

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false, option: ""};
  }
  setOpen = (x) => {
    if(this.state.open === false){
        this.setState({open: true, option: x});
    } else {
        this.setState({open: false, option: ""});
    }
  }
  render() {
    let plans = this.props.plans;
    return (
      <div className="card hover">
        {plans.map((plan, index) => {
          if (plan.title === this.props.type) {
            return (
              <>
                <div className="card-top">
                  <div className="card-top-title">
                    <span>{plan.title}</span>
                  </div>
                  <div className="card-top-description">
                    <span>{plan.description}</span>
                  </div>
                  <div className="card-top-pricing">
                    <span>{plan.price}</span>
                    <div className="rectangle"></div>
                    <div className="card-top-pricing-info">
                      <span>per month</span>
                      <span>per employee</span>
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div className="card-bottom">
                  <div className="card-bottom-list">
                    <div className="first-tier">
                      <div className="card-bottom-list-items">
                        <div className="card-bottom-list-items-group-one">
                          {plan.title === "Essential" ? (
                            <span className="tick">
                              <Tick transform="scale(0.5)" fill="#203C86" />
                            </span>
                          ) : (
                            <span className="hidden"></span>
                          )}
                          <span>{plan.optionOne}</span>
                        </div>
                        {plan.title !== "Essential" ? (
                          <span>
                            <img
                              onClick={() => this.setOpen("hr")}
                              className="info-icon"
                              src="https://cdn-icons-png.flaticon.com/24/18/18623.png"
                              alt=""
                            ></img>
                            {this.state.open && this.state.option === "hr" && <Modal />}
                          </span>
                        ) : (
                          <span className="hidden"></span>
                        )}
                      </div>
                      <div className="card-bottom-list-items">
                        <div className="card-bottom-list-items-group-one">
                          {plan.title === "Essential" ? (
                            <span className="tick">
                              <Tick transform="scale(0.5)" fill="#203C86" />
                            </span>
                          ) : (
                            <span className="hidden"></span>
                          )}
                          <span>{plan.optionTwo}</span>
                        </div>
                        {plan.title !== "Essential" ? (
                          <span>
                            <img
                              className="info-icon"
                              src="https://cdn-icons-png.flaticon.com/24/18/18623.png"
                              alt=""
                            ></img>
                          </span>
                        ) : (
                          <span className="hidden"></span>
                        )}
                      </div>
                      <div className="card-bottom-list-items">
                        <div className="card-bottom-list-items-group-one">
                          {plan.title === "Essential" ? (
                            <span className="tick">
                              <Tick transform="scale(0.5)" fill="#203C86" />
                            </span>
                          ) : (
                            <span className="hidden"></span>
                          )}
                          <span>{plan.optionThree}</span>
                        </div>
                        {plan.title !== "Essential" ? (
                          <span>
                            <img
                              className="info-icon"
                              src="https://cdn-icons-png.flaticon.com/24/18/18623.png"
                              alt=""
                            ></img>
                          </span>
                        ) : (
                          <span className="hidden"></span>
                        )}
                      </div>
                      <div className="card-bottom-list-items">
                        <div className="card-bottom-list-items-group-one">
                          {plan.title === "Essential" ? (
                            <span className="tick">
                              <Tick transform="scale(0.5)" fill="#203C86" />
                            </span>
                          ) : (
                            <span className="hidden"></span>
                          )}
                          <span>{plan.optionFour}</span>
                        </div>
                        {plan.title !== "Essential" ? (
                          <span>
                            <img
                              className="info-icon"
                              src="https://cdn-icons-png.flaticon.com/24/18/18623.png"
                              alt=""
                            ></img>
                          </span>
                        ) : (
                          <span className="hidden"></span>
                        )}
                      </div>
                    </div>
                    <div className="higher-tier">
                    <div className="card-bottom-list-items">
                      <div className="card-bottom-list-items-group-one">
                        <span className="hidden"></span>
                        <span>{plan.optionFive}</span>
                      </div>
                      {plan.title !== "Essential" ? (
                        <span>
                          <img
                            className="info-icon"
                            src="https://cdn-icons-png.flaticon.com/24/18/18623.png"
                            alt=""
                          ></img>
                        </span>
                      ) : (
                        <span className="hidden"></span>
                      )}
                    </div>
                    <div className="card-bottom-list-items">
                      <div className="card-bottom-list-items-group-one">
                        <span className="hidden"></span>
                        <span>{plan.optionSix}</span>
                      </div>
                      {plan.title !== "Essential" ? (
                        <span>
                          <img
                            className="info-icon"
                            src="https://cdn-icons-png.flaticon.com/24/18/18623.png"
                            alt=""
                          ></img>
                        </span>
                      ) : (
                        <span className="hidden"></span>
                      )}
                    </div>
                    <div className="card-bottom-list-items">
                      <div className="card-bottom-list-items-group-one">
                        <span className="hidden"></span>
                        <span>{plan.optionSeven}</span>
                      </div>
                      {plan.title !== "Essential" && plan.title !== "Growth" ? (
                        <span>
                          <img
                            className="info-icon"
                            src="https://cdn-icons-png.flaticon.com/24/18/18623.png"
                            alt=""
                          ></img>
                        </span>
                      ) : (
                        <span className="hidden"></span>
                      )}
                    </div>
                  </div>
                  </div>
                  <div className="card-bottom-button">Select Plan</div>
                </div>
              </>
            );
          } else {
            return "";
          }
        })}
      </div>
    );
  }
}

export default Card;
