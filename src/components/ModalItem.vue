<template>
    <b-modal id="modal-1" title="PEP" class="my-modal">
      <template #modal-header="{ close }">
        <div class="px-4 pt-4">
          <b-button @click="close()" class="p-0 mb-4 modal-btn">
            <img src="../assets/icons/cross.png" width="23" height="23">
          </b-button>
          <h5>PEP</h5>
        </div>
      </template>
      <p class="my-0 px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros arcu, rhoncus non nisl eu, tincidunt accumsan diam. Ut id accumsan nulla. Quisque ut quam efficitur nulla posuere fringilla id eget nisi. Ut ex velit, vehicula quis diam et, vestibulum faucibus felis. Phasellus dignissim a elit nec finibus. Nullam id justo sed libero consectetur ullamcorper ac ac massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam mollis felis eu ipsum sagittis pretium. Curabitur maximus bibendum velit at venenatis.</p>
      <template #modal-footer>&nbsp;</template>
    </b-modal>
</template>

<script>
export default {
  name: "ModalItem"
};
</script>