<template>
  <div class="btn">
    <slot name="default">
      <div
        class="defalut-btn"
        :style="{ width: wd, height: ht }"
        v-if="types == 'default'"
        :class="{ defalut: statusType[types] }"
      >
        基本按钮
      </div>
    </slot>
    <slot name="success">
      <div
        class="seccess-btn"
        :style="{ width: wd, height: ht }"
        v-if="types == 'success'"
        :class="{ success: statusType[types] }"
      >
        成功按钮
      </div>
    </slot>
    <slot name="warning">
      <div
        class="warning-btn"
        :style="{ width: wd, height: ht }"
        v-if="types == 'warning'"
        :class="{ warning: statusType[types] }"
      >
        警告按钮
      </div>
    </slot>
    <slot name="danger">
      <div
        class="danger-btn"
        :style="{ width: wd, height: ht }"
        v-if="types == 'danger'"
        :class="{ danger: statusType[types] }"
      >
        危险按钮
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "van-boutton",
  props: {
    wd: {
      type: [String, Number],
      required: true,
      default: "200px",
    },
    ht: {
      type: [String, Number],
      required: true,
      default: "200px",
    },
    types: {
      type: String,
      required: true,
      default: "default",
    },
  },
  data() {
    return {
      statusType: null,
    };
  },
  created() {
    this.statusType = {
      default: "default",
      success: "success",
      warning: "warning",
      danger: "danger",
    };
  },
};
</script>

<style scoped>
.defalut {
  border: 1px #ebedf0 solid;
  color: #323233;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 4px;
  cursor: pointer;
}
.success {
  background: #07c160;
  color: #fff;
  border: 1px #07c160 solid;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 4px;
  cursor: pointer;
}
.warning {
  background: #ff976a;
  color: #fff;
  border: 1px #ff976a solid;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 4px;
  cursor: pointer;
}
.danger {
  background: #ee0a24;
  color: #fff;
  border: 1px #ee0a24 solid;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 4px;
  cursor: pointer;
}
</style>