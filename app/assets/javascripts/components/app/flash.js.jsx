window.Flash = React.createClass({
  getInitialState: function () {
    return ({
      messages: [] ,
      visible: false
    });
  },

  componentDidMount: function () {
    UiStore.addFlashHandler(this._onChange);
  },

  componentWillUnmount: function () {
    UiStore.removeFlashHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({
      messages: UiStore.flash(),
      visible: true
    });
    window.setTimeout(function () {
      this.setState({
        messages: [],
        visible: false
      });
    }.bind(this), 3000);
  },

  render: function () {
    var messages = this.state.messages.map(function (message, idx) {
      return <span key={idx}>{message}</span>;
    });

    var visible = (this.state.visible ? "" : " hidden");

    return (
      <section className={"flash-banner" + visible}>
        { messages }
      </section>
    );
  }
});
