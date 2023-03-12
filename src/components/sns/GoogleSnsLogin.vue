<template>
  <div>
    <div id="googleDiv"></div>
  </div>
</template>

<script>
export default {
  name: "GoogleSnsLogin",
  mounted() {
    window.google.accounts.id.initialize({
      client_id: "86812345819-ufioq05ovt6pg4cvaheo7jvvgfo0u3g2",
      callback: this.onSignIn
    });
    window.google.accounts.id.renderButton(
        document.getElementById("googleDiv"),
        { theme: "outline", size: "medium", type: 'icon' }  // customization attributes
    );
  },
  methods: {
    onSignIn(response) {
      const responsePayload = this.parseJwt(response.credential);
      console.log(responsePayload)
      console.log("ID: " + responsePayload.sub);
      console.log('Full Name: ' + responsePayload.name);
      console.log('Given Name: ' + responsePayload.given_name);
      console.log('Family Name: ' + responsePayload.family_name);
      console.log("Image URL: " + responsePayload.picture);
      console.log("Email: " + responsePayload.email);
    },
    parseJwt(token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
    }
  }
}
</script>

<style scoped>

</style>