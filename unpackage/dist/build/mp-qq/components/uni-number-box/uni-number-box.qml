<view class="uni-numbox data-v-19f9f947"><view data-event-opts="{{[['tap',[['_calcValue',['minus']]]]]}}" class="uni-numbox__minus data-v-19f9f947" bindtap="__e"><text class="{{['uni-numbox--text data-v-19f9f947',(inputValue<=min||disabled)?'uni-numbox--disabled':'']}}">-</text></view><input class="uni-numbox__value data-v-19f9f947" disabled="{{disabled}}" type="number" data-event-opts="{{[['blur',[['_onBlur',['$event']]]],['input',[['__set_model',['','inputValue','$event',[]]]]]]}}" value="{{inputValue}}" bindblur="__e" bindinput="__e"/><view data-event-opts="{{[['tap',[['_calcValue',['plus']]]]]}}" class="uni-numbox__plus data-v-19f9f947" bindtap="__e"><text class="{{['uni-numbox--text data-v-19f9f947',(inputValue>=max||disabled)?'uni-numbox--disabled':'']}}">+</text></view></view>