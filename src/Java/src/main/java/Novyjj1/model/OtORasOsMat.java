package Novyjj1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Novyjj1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ОтОРасОсМат
 */
@Entity(name = "IISNovyjj1ОтОРасОсМат")
@Table(schema = "public", name = "ОтОРасОсМат")
public class OtORasOsMat {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ОбРабПоСм")
    private Float обрабпосм;

    @Column(name = "НормРасх")
    private Float нормрасх;

    @Column(name = "КолПоСме")
    private Float колпосме;

    @Column(name = "ОстПоСмет")
    private Float остпосмет;

    @Column(name = "КолПоАкт")
    private Float колпоакт;


    public OtORasOsMat() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Float getОбРабПоСм() {
      return обрабпосм;
    }

    public void setОбРабПоСм(Float обрабпосм) {
      this.обрабпосм = обрабпосм;
    }

    public Float getНормРасх() {
      return нормрасх;
    }

    public void setНормРасх(Float нормрасх) {
      this.нормрасх = нормрасх;
    }

    public Float getКолПоСме() {
      return колпосме;
    }

    public void setКолПоСме(Float колпосме) {
      this.колпосме = колпосме;
    }

    public Float getОстПоСмет() {
      return остпосмет;
    }

    public void setОстПоСмет(Float остпосмет) {
      this.остпосмет = остпосмет;
    }

    public Float getКолПоАкт() {
      return колпоакт;
    }

    public void setКолПоАкт(Float колпоакт) {
      this.колпоакт = колпоакт;
    }


}