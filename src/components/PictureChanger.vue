<template>
  <div>
    <vue-avatar
      :width="228"
      :height="228"
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
      <br>
      <label>
        Zoom : {{scale}}x
        <br>
        <input
          type="range"
          min=0
          max=3
          step=0.02
          v-model='scale'
        />
      </label>
      <br>
      <button v-on:click="saveClicked" class="btn btn-sm btn-primary btn-block mb-2">
        {{ $t('common.save_picture') }}</button>
      <br>
      <img ref="image">
    </div>
    <loading-circle :loading="savingPicture"></loading-circle>
  </div>
</template>

<script>
import VueAvatar from 'seed-theme/src/components/VueAvatar.vue';

export default {
  name: 'PictureChanger',
  components: {
    VueAvatar,
  },
  data() {
    return {
      pictureUrl: '',
      filename: '',
      urlToSave: '',
      showImageControls: false,
      savingPicture: false,
      pictureSaved: false,
      rotation: 0,
      scale: 1,
      borderRadius: 0,
    };
  },
  methods: {
    loadImage(pictureUrl, filename, urlToSave) {
      this.pictureUrl = pictureUrl;
      this.filename = filename;
      this.urlToSave = urlToSave;
      this.$refs.vueavatar.loadImage(this.pictureUrl);
    },
    saveClicked() {
      const self = this;
      this.savingPicture = true;
      // const img = this.$refs.vueavatar.getImageScaled();
      // this.$refs.image.src = img.toDataURL('image/jpeg', 1.0);
      const canvas = document.getElementById('avatarEditorCanvas');
      canvas.toBlob((blob) => {
        const formData = new FormData();
        formData.append('pictureFile', blob, self.picture);
        // Post via axios or other transport method
        self.axios.post(self.urlToSave, formData)
          .then((result) => {
            self.$emit('picture-saved', result.data);
            self.savingPicture = false;
            self.showImageControls = false;
          })
          .catch(() => { // error
            self.savingPicture = false;
            self.opps = true;
          });
      }, 'image/jpeg', 1.0);
    },
    onImageReady() {
      this.scale = 1;
      this.rotation = 0;
    },
    onFileSelected() {
      this.showImageControls = true;
    },
  },
};
</script>

<style lang="scss" scoped>

canvas {
  width: 228px;
  height: 228px;
}

</style>
