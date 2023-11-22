<template>
  <div>
    <Breadcrumb pageTitle="Online Order" />
    <div class="checkout-area pt-95 pb-100">
      <div class="welcome-area">
        <div class="container">
          <div class="welcome-content text-center">
            <h1>PLACE YOUR ORDER ONLINE</h1>
            <p>To place an online order, please download the product list first and fill in the necessary items in the spreadsheet. Once you finish send the Excel order file using the form below.</p>
          </div>
          <div class="text-center py-3">
            <button class="empty-cart__button btn-hover">Download</button>
          </div>
        </div>
      </div>
      <div class="container pt-50">
        <div class="row">
          <div class="col-lg-7 mx-auto">
            <div class="billing-info-wrap">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="billing-info mb-20">
                    <label>Your Name</label>
                    <input type="text">
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="billing-info mb-20">
                    <label>Email</label>
                    <input type="email">
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="billing-info mb-20">
                    <label>Business Name</label>
                    <input type="text">
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="billing-info mb-20">
                    <label>ABN</label>
                    <input type="text">
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="billing-info mb-20">
                    <label>Contact info</label>
                    <input type="text">
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="billing-info mb-20">
                    <label>Website address</label>
                    <input type="text">
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="billing-info mb-20">
<!--                  <label>Address</label>-->
                  <input class="billing-address" type="file">
                </div>
              </div>
              <div class="additional-info-wrap">
                <h4>Additional information</h4>
                <div class="additional-info">
                  <label>Order notes</label>
                  <textarea placeholder="Notes about your order, e.g. special notes for delivery. " name="message"></textarea>
                </div>
              </div>
              <div class="text-center py-3">
                <button class="empty-cart__button btn-hover">Place Your Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>


</script>

<style>

</style>