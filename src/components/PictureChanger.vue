<template>
  <div>
    <vue-avatar
      :width="200"
      :height="200"
      :rotation="rotation"
      :borderRadius="borderRadius"
      :scale="scale"
      :border= "0"
      :title="$t('common.click_to_change_picture')"
      ref="vueavatar"
      @vue-avatar-editor:image-ready="onImageReady"
      @select-file="onFileSelected"
    >
    </vue-avatar>
    <div v-show="showImageControls && !savingPicture">
      <label class="mt-4 mb-4">
        <div class="mb-2">Zoom : {{scale}}x</div>
        <input
          type="range"
          min=0
          max=3
          step=0.02
          v-model='scale'
        />
      </label>
      <button v-on:click="saveClicked"
      class="btn btn-primary btn-block font-weight-bold mb-4">
        {{ $t('common.save_picture') }}</button>
      <img ref="image">
    </div>
    <loading-checkmark :loading="savingPicture"></loading-checkmark>
  </div>
</template>

<script>
import VueAvatar from 'seed-theme/src/components/VueAvatar.vue';
import { reactive, toRefs } from '@vue/composition-api';

export default {
  name: 'PictureChanger',
  components: {
    VueAvatar,
  },
  setup(props, context) {
    const data = reactive({
      pictureUrl: '',
      filename: '',
      urlToSave: '',
      showImageControls: false,
      savingPicture: false,
      pictureSaved: false,
      rotation: 0,
      scale: 1,
      borderRadius: 0,
    });

    function loadImage(pictureUrl, filename, urlToSave) {
      data.pictureUrl = pictureUrl;
      data.filename = filename;
      data.urlToSave = urlToSave;
      context.refs.vueavatar.loadImage(data.pictureUrl);
    }

    function saveClicked() {
      data.savingPicture = true;
      // const img = this.$refs.vueavatar.getImageScaled();
      // this.$refs.image.src = img.toDataURL('image/jpeg', 1.0);
      const canvas = document.getElementById('avatarEditorCanvas');
      canvas.toBlob((blob) => {
        const formData = new FormData();
        formData.append('pictureFile', blob, data.picture);
        // Post via axios or other transport method
        context.root.axios.post(data.urlToSave, formData)
          .then((result) => {
            context.emit('picture-saved', result.data);
            data.savingPicture = false;
            data.showImageControls = false;
          })
          .catch(() => { // error
            data.savingPicture = false;
            data.oops = true;
          });
      }, 'image/jpeg', 1.0);
    }

    function onImageReady() {
      data.scale = 1;
      data.rotation = 0;
    }

    function onFileSelected() {
      data.showImageControls = true;
    }

    return {
      ...toRefs(data), loadImage, saveClicked, onImageReady, onFileSelected,
    };
  },
};
</script>

<style lang="scss" scoped>

canvas {
  width: 228px;
  height: 228px;
}

</style>
