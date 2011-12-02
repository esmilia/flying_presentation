<?php

function theme_flying_presentation($project_slides = array(), $trigger_link = TRUE) {
  drupal_add_css(drupal_get_path('module', 'flying_presi') . '/flying_presi.css');
  drupal_add_js(drupal_get_path('module', 'flying_presi') . '/flying_presi.js');
  
  $output = '';
  $project_slides_titles = array();

  ($trigger_link) ? $output .= '<span class="flying-presi-trigger">' . t('Start presentation') . '</span>' : '';

  $output .= '<div class="project-container">';

  foreach ($project_slides as $project_slide) {
    $project_slides_titles[] = $project_slide['#title'];

    $output .= '<div id="project-slide-' . $project_slide['#nid'] . '" class="project-slide">';

    $counter = 1;
    foreach ($project_slide['images'] as $project_slide_image) {
      $output .= theme('imagecache', 'slide', $project_slide_image, '', '', array('class' => 'project-slide-image-' . $counter));
      $counter++;
    }

    $output .= '</div>';
  }

  $output .= theme('list', $project_slides_titles, NULL, 'ul', array('class' => 'project-menu'));

  $output .= '</div>';
  
  return $output;
}

function theme_flying_presentation_data($nid) {
  $project = node_load($nid);
  if ($project->type == 'project') {
    $project_slides = $project_slides_titles = array();

    foreach ($project->field_project_slides as $key => $project_slide) {
      $project_slide_node = node_load($project_slide['nid']);

      $project_slides[$key]['#nid'] = $project_slide_node->nid;
      $project_slides[$key]['#title'] = $project_slide_node->title;
      $project_slides[$key]['images'] = array();

      foreach ($project_slide_node->field_slide_pictures as $project_slide_picture) {
        if ($project_slide_picture['filepath']) {
          $project_slides[$key]['images'][] = $project_slide_picture['filepath'];
        }
      }
      
    }
    
  }
  return $project_slides;
}

function theme_list($items = array(), $title = NULL, $type = 'ul', $attributes = NULL) {
  if (isset($title)) {
    $output .= '<h3>' . $title . '</h3>';
  }

  if (!empty($items)) {
    $output .= "<$type" . drupal_attributes($attributes) . '>';
    $num_items = count($items);
    foreach ($items as $i => $item) {
      $attributes = array();
      $children = array();
      if (is_array($item)) {
        foreach ($item as $key => $value) {
          if ($key == 'data') {
            $data = $value;
          }
          elseif ($key == 'children') {
            $children = $value;
          }
          else {
            $attributes[$key] = $value;
          }
        }
      }
      else {
        $data = $item;
      }
      if (count($children) > 0) {
        $data .= theme_item_list($children, NULL, $type, $attributes); // Render nested list
      }
      if ($i == 0) {
        $attributes['class'] = empty($attributes['class']) ? 'first' : ($attributes['class'] . ' first');
      }
      if ($i == $num_items - 1) {
        $attributes['class'] = empty($attributes['class']) ? 'last' : ($attributes['class'] . ' last');
      }
      $output .= '<li' . drupal_attributes($attributes) . '>' . $data . "</li>\n";
    }
    $output .= "</$type>";
  }
  return $output;
}