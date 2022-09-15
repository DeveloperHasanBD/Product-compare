<?php
$imp_product_id = $product->get_id();
$imp_product_name = $product->get_title();
?>
<div class="imp_p_c_checkbox_group">
  <div class="form-check">
    <div class="check-box">
      <input type="checkbox" imp_product_title="<?php echo mb_substr($imp_product_name, 0, 17); ?>" imp_product_name="<?php echo $imp_product_name; ?>" imp_product_id="<?php echo $imp_product_id; ?>" name="imp_compare_checkbox" id="imp_compare_checkbox_<?php echo $imp_product_id; ?>" class="imp_compare_checkbox">
      <label class="form-check-label imp_compare_checkbox_label_<?php echo $imp_product_id; ?>" for="imp_compare_checkbox_<?php echo $imp_product_id; ?>" style="color: black;"><span>Confronta</span></label>
    </div>
  </div>
  <div class="snd_btn">
    <a href="<?php echo the_permalink(); ?>#scopri">Scopri la Serie</a>
  </div>
</div>
