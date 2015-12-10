SearchIndex = React.createClass({
  render: function () {
    return (
      <div className="search-index group">
        <Navbar />
        <section className="search-index-sidebar">
          <FilterForm />
        </section>
        <section className="seach-results">
          <RestaurantIndex />
        </section>
      </div>
    );
  }
});
