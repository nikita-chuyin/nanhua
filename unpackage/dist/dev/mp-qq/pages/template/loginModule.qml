<view class="sWhole_box data-v-33b35320"><view class="login_box data-v-33b35320"><image src="{{imageSrc}}" mode class="data-v-33b35320"></image><text class="data-v-33b35320">{{loginTitle}}</text></view><view class="score_container data-v-33b35320"><text class="score_text data-v-33b35320">{{studengNumber.number}}</text><input type="text" placeholder="{{studengNumber.placeHolder}}" data-event-opts="{{[['input',[['inputNum',['$event']]]]]}}" value="{{stuNum}}" bindinput="__e" class="data-v-33b35320"/></view><view class="score_container data-v-33b35320"><text class="score_text data-v-33b35320">{{studengPassword.password}}</text><input password="true" placeholder="{{studengPassword.placeHolder}}" data-event-opts="{{[['input',[['inputPasswd',['$event']]]]]}}" value="{{password}}" bindinput="__e" class="data-v-33b35320"/></view><slot></slot><button data-event-opts="{{[['tap',[['login',['$event']]]]]}}" class="btn_type data-v-33b35320" bindtap="__e">{{btnText}}</button></view>