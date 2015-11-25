window.UserProfile = React.createClass({
  render: function () {
    return (
      <section className="user-profile-content group">
        <Navbar />
        <UserProfileSidebar />
        { this.props.children }
      </section>
    );
  }
});
