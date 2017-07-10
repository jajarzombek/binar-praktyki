import React from "react";
import Button from "../user-interface/Button";
//import AlertButton from "../user-interface/AlertButton";
import styled from "styled-components";
import { connect } from "react-redux";

class Post extends React.Component {
  remove = () => {
    this.props.onRemove(this.props.id);
  };

  showPost = () => {
    //console.log(this.props);
    this.props.onClick(this.props.id);
  };

  render() {
    //let postDate = new Date(this.props.timestamp).toString().substring(0, 25);
    return (
      <StyledPost>
        <StyledDiv>
          <div className="container-fluid">
            <label>Title: </label>
            {this.props.title}
          </div>
          <div className="container-fluid">
            <label>Timestamp:</label>
            {this.props.created_at}
            {}
          </div>
          <div className="container-fluid">
            <label>Body:</label> {this.props.body}
          </div>
        </StyledDiv>
        <StyledDiv>
          {/* <Button
						onClick={this.remove}
						label="Remove"
						className="btn-success btn-lg btn-block"
					/> */}
          <div className="container-fluid">
            <i
              onClick={this.showPost}
              className="fa fa-binoculars fa-2x"
              style={{ color: "#c94c4c" }}
              fontaria-hidden="true"
            />
          </div>
          <div className="container-fluid">
            <i
              onClick={this.remove}
              className="fa fa-times fa-3x"
              style={{ color: "#c94c4c" }}
              fontaria-hidden="true"
            />
          </div>

          {/* <Button
            onClick={this.showPost}
            label="Show post"
            className="btn-success btn-lg btn-block"
          /> */}
        </StyledDiv>
      </StyledPost>
    );
  }
}

class PostList extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        {this.props.posts.map(p =>
          <ul style={{ padding: 0 }}>
            <Post
              // title={p.title}
              // timestamp={p.created_at}
              // text={p.body}
              key={p.id}
              {...p}
              onRemove={this.props.onRemove}
              onClick={this.props.onClick}
            />
          </ul>
        )}
        {/* <div>
					<AlertButton onClick={alert("klik")} label="klik" />
				</div> */}
      </div>
    );
  }
}

const StyledPost = styled.div`
  border: 1px solid #aaa;
  background-color: #eee;
  margin: 5px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  &:hover {
    opacity: 0.7;
  }
`;

const StyledDiv = styled.div`justify-content: space-between;`;

const StyledPostList = styled(PostList)`
	margin-top: 10px;
`;

// const Button = styled.button`border: none;`;
//
// const AlertButton = Button.extend``;
const mapStateToProps = state => {
  return {};
};
export { PostList, Post };
