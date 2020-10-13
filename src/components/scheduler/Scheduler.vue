<template>
    <div class="x-scheduler">
        <div v-if="vm.mode == 'day'">
            
        </div>
    </div>
</template>
<script>
import PropTypes from '@znck/prop-types'
import {SchedulerVM} from './scheduler.vm'
export default {
    props: {
        vm: PropTypes.instanceOf(SchedulerVM).isRequired
    }
}
</script>