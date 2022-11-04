<template>
  <div class='hy-from'>
    <div class='header'>
      <slot name='header'></slot>
    </div>
    <el-form :label-width='stylewidth' :rules='rules' :model='modelValue'>
      <el-row>
        <template v-for='item in fromItem' :key='item.label'>
          <el-col v-bind='colLayout'>
            <el-form-item
              v-if='!item.isHidden'
              :label='item.label'
              :style='Itemstyle' :prop='item.field'>
              <template v-if='item.type === "input"|| item.type === "password"'>
                <el-input :placeholder='item.placeholder'
                          :show-password='item.type === "password"'
                          v-bind='item.otherOptions'
                          :model-value='modelValue[`${item.field}`]'
                          @update:modelValue='handleValueChange($event,item.field)'
                          class='demoInput'
                ></el-input>
                <div class='underline'></div>
              </template>
              <template v-else-if='item.type === "select"'>
                <el-select :placeholder='item.placeholder' v-bind='item.otherOptions' style='width: 100%;'
                           :model-value='modelValue[`${item.field}`]'
                           @update:modelValue='handleValueChange($event,item.field)'>
                  <el-option v-for='optionitem in item.option'
                             :key='optionitem.value'
                             :value='optionitem.value'>
                    {{ optionitem.title }}
                  </el-option>
                </el-select>
              </template>
              <template v-else-if='item.type==="datepicker"'>
                <el-date-picker style='width: 100%'
                                v-bind='item.otherOptions'
                                :model-value='modelValue[`${item.field}`]'
                                @update:modelValue='handleValueChange($event,item.field)'>
                </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class='footer'>
      <slot name='footer'></slot>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, reactive, ref, watch } from 'vue'
import { IFormItem } from '@/base-ui/form/type'

export default defineComponent({
  name: 'hy-from',
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    fromItem: {
      type: Array as PropType<IFormItem[]>,
      default: () => []

    },
    stylewidth: {
      type: String,
      default: '100px'
    },
    Itemstyle: {
      type: Object,
      default: () => ({ padding: '10px 50px 0px 20px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920px 4个
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    rules: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // const formData = ref({ ...props.modelValue })
    // watch(() => props.modelValue, (newvalue) => {
    //     formData.value = { ...newvalue }
    //   }
    // )
    // watch(formData, (newValue) => {
    //   emit('update:modelValue', newValue)
    // }, {
    //   deep: true
    // })

    const handleValueChange = (value: any, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    }
    console.log(props.modelValue['name'])

    return {
      handleValueChange
    }
  }
})
</script>

<style scoped>
.hy-from {
  padding-top: 22px;
}
</style>