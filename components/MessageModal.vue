<template>
    <modal name="messageModal"  width="50%" :scrollable="true" height=auto >
      <div class="quickview-wrapper row">
        <div class="col-md-12 text-center">
        {{title}}
          <div slot="top-right">
            <button @click="$modal.hide('messageModal')" class="modal-close">
              <i class="fa fa-times"></i>
            </button>
          </div>
        </div>
      </div>
    </modal>
</template>

<script>
export default {
         props:['title']
};
</script>

<style lang="scss">
.quickview-wrapper {
  .product-details-content {
    @media #{$xs-layout} {
      padding-top: 30px;
    }
    .pro-details-cart {
      &.btn-hover {
        button {
          @media #{$xxs-layout}{
            padding: 23px 15px;
          }
        }
      }
    }
  }
}
.vm--overlay {
  background-color: rgba($dark, 0.8);
}
.vm--modal {
  padding: 15px;
  overflow-y: auto;
}
.modal-close {
  top: -20px;
  right: -20px;
  width: 40px;
  height: 40px;
  color: $white;
  font-size: 20px;
  border-radius: 50%;
  position: absolute;
  border: 1px solid $theme-color;
  background-color: $theme-color;
}
.quickview-nav {
  color: $black;
  width: 40px;
  height: 40px;
  font-size: 40px;
  line-height: 40px;
  background-color: rgba($black, 0.2);
  transition: 0.4s;
  &:hover {
    color: $white;
    background-color: $theme-color;
  }
}
.vm--container.scrollable .vm--modal {
  width: 1000px !important;
  left: 50% !important;
  transform: translateX(-50%);
  overflow: unset;
  @media #{$md-layout}{
    width: 700px !important;
  }
  @media #{$xs-layout}{
    width: 320px !important;
    top: 30px !important;
  }
  @media only screen and (min-width: 480px) and (max-width: 579px){
    width: 420px !important;
  }
  @media #{$sm-layout}{
    width: 500px !important;
  }
}
</style>