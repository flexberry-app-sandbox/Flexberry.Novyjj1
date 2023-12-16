package Novyjj1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Novyjj1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: ПланировСМР
 */
@Entity(name = "IISNovyjj1ПланировСМР")
@Table(schema = "public", name = "ПланировСМР")
public class PlanirovSMR {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодСДР")
    private Integer кодсдр;

    @Column(name = "ДатаНачала")
    private Date датаначала;

    @Column(name = "ДатаОкончания")
    private Date датаокончания;

    @Column(name = "Длительность")
    private Integer длительность;


    public PlanirovSMR() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодСДР() {
      return кодсдр;
    }

    public void setКодСДР(Integer кодсдр) {
      this.кодсдр = кодсдр;
    }

    public Date getДатаНачала() {
      return датаначала;
    }

    public void setДатаНачала(Date датаначала) {
      this.датаначала = датаначала;
    }

    public Date getДатаОкончания() {
      return датаокончания;
    }

    public void setДатаОкончания(Date датаокончания) {
      this.датаокончания = датаокончания;
    }

    public Integer getДлительность() {
      return длительность;
    }

    public void setДлительность(Integer длительность) {
      this.длительность = длительность;
    }


}