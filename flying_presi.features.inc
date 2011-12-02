<?php

/**
 * Implementation of hook_imagecache_default_presets().
 */
function flying_presi_imagecache_default_presets() {
  $items = array(
    'slide' => array(
      'presetname' => 'slide',
      'actions' => array(
        '0' => array(
          'weight' => '0',
          'module' => 'imagecache',
          'action' => 'imagecache_scale_and_crop',
          'data' => array(
            'width' => '1800',
            'height' => '1040',
          ),
        ),
      ),
    ),
  );
  return $items;
}

/**
 * Implementation of hook_node_info().
 */
function flying_presi_node_info() {
  $items = array(
    'project' => array(
      'name' => t('Project'),
      'module' => 'features',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'has_body' => '^',
      'body_label' => t('Body'),
      'min_word_count' => '0',
      'help' => '',
    ),
    'project_slide' => array(
      'name' => t('Project slide'),
      'module' => 'features',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'has_body' => '0',
      'body_label' => '',
      'min_word_count' => '0',
      'help' => '',
    ),
  );
  return $items;
}
